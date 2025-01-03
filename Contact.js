const Contact = () => {
    return (
        <div> 
            <h1 className="font-bold text-3xl p-4 m-4">Contact us</h1>
            <form>
                <input typeof="text" className="border border-black p-2 m-2" placeholder="name"></input>
                <input typeof="text" className="border border-black p-2 m-2" placeholder="message"></input>
                <button className="border border-black p-2 m-2 bg-gray-300 rounded-lg">Submit</button>

            </form>
        
        </div>
    )
}

export default Contact;
