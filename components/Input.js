export default function Input(props){
    return (
        <input
        className="rounded p-4 text-x1 w-full"
        name={props.name}
        placeholder={props.placeholder}
        />
    )
}