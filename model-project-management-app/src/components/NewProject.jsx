import Input from "./Input"

export default function NewProject() {
    return <div>
        <menu>
            <li><button>Cancel</button></li>
            <li><button>Save</button></li>
        </menu>
        <div>
            <Input label="Title" textarea={false} />
            <Input label="Description" textarea={true} />
            <Input label="Title" textarea={false} />
        </div>
    </div>
}