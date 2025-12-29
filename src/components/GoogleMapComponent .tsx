// GoogleMapComponent.tsx
import { ResBranch } from "@/types/Branch/response";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: 'var(--radius-3xl)'
};


type GoogleMapComponentProp = {
    data: ResBranch[];
    index: number | null;
    zoom: number
}

const GoogleMapComponent: React.FC<GoogleMapComponentProp> = ({ data, index, zoom }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    });

    const center = {
        lat: data[index ?? 0].location.latitude,
        lng: data[index ?? 0].location.longitude,
    };

    if (!isLoaded) return <p>Loading map...</p>;

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
        >
            {data.map((loc, index) => (
                <Marker
                    key={index}
                    position={{
                        lat: loc.location.latitude,
                        lng: loc.location.longitude,
                    }}
                    title={loc.name}
                />
            ))}
        </GoogleMap>
    );
};

export default GoogleMapComponent;
