const style = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 100,
    marginLeft: 100,
    marginRight: 100,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#444466',
};
const styleH1 = {
    color: 'white',
    marginTop: '40%',
}

function Header({ title }) {
    return (
        <header style={style}>
            <div>
                <img src="./logo192.png" alt="logo" />
            </div>
            <div>
                <h1 style={styleH1}>{title}</h1>
            </div>
        </header>
    )
}
export default Header;