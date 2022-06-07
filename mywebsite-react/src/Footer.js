function Footer({text}){
    const style = {
        padding: 40,
        backgroundColor: '#664444',
        color: 'white',
        textAlign: 'center',
        marginBottom: 100,
        marginLeft: 100,
        marginRight: 100,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    }
return(
    <footer style={style}>{text}</footer>
)
}
export default Footer;