export default function List(props){
    const { list } = props
    return (
        <div>
          <div>
            <h1>Name: {list.class_name}</h1>
            <h3>Type: {list.class_type}</h3>
            <h3>Start Time: {list.class_start_time}</h3>
            <h3>Duration: {list.class_duration}</h3>
            <h3>Intensity: {list.class_intensity}</h3>
            <h3>Location: {list.class_location}</h3>
            <h3>Attendances: {list.class_registered_attendees}</h3>
            <h3>Max Size: {list.class_max_size}</h3>
          </div>
        </div>
    )
}
