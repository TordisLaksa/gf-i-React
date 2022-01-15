export const navItems = [
    { name: 'Verdensmålene', id: 'verdengoals' },
    { name: 'Delmålene', id: 'delgoals' },
    { name: 'Udfordringer', id: 'udfordringer' },
    { name: 'Kontakt', id: 'contact' }
]

export const Nav = (props) => {
    return (
        <nav>
            <ul>
                {props.items.map((item, key) => {
                    return (
                        //key for ellers brokker den sig (skal have en unik key) (key starter på 0 og går op efter)
                        <ListItem key={key} name={item.name} id={item.id} />
                    )
                })}
            </ul>
        </nav>
    )
}

const ListItem = (props) => {
    return <li><a href={props.id}>{props.name}</a></li>
}