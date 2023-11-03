import EventData from "../../data/events.json";

export function Events() {
    console.log(EventData)
    return (
        <div className="flex rounded-md shadow-sm m-11">
            {EventData.toString()}
        </div>

    );
}