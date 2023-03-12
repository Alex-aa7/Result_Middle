export const Todo =({title='default title', listStrings=[]})=> {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {listStrings.map((value)=>(
                    
                    <li>{value}</li>
                ))}
            </ul>
        </div>
    )
}

export const Todo2 =(props)=> {
    // const title=props.title||'default title 2';
    // const listStrings=props.listStrings||[];
    const {title='', listStrings=[]}=props

    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {listStrings.map((value)=>(
                    
                    <li>{value}</li>
                ))}
            </ul>
        </div>
    )
}