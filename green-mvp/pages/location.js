export default function Location() {

    // if (window.navigator.geolocation) {
    //     // Geolocation available
    //     window.navigator.geolocation.getCurrentPosition(console.log, console.log);
    //    }

    // const data = navigator.geolocation.getCurrentPosition()

    function getLocation() {
        navigator.geolocation.getCurrentPosition((position) =>
        console.log(position)
        )
    }
    
    return (
        <>
        <h1>Location</h1>
        <button onClick={getLocation}>Get Location</button>
        </>
    )
    
}