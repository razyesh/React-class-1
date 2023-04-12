import './table.css';

function Table({columns}){
    console.log(columns)
    columns.forEach(element => {
        console.log(<th>{element.name}</th>)
    })
    return (
        <table className="table">
            <thead>
                <tr>
                    {}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{"A"}</td>
                    <td>{"A"}</td>
                    <td>{"A"}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;