function Main() {
    const list = [
        { id: '#Home', text: 'Home' },
        { id: '#About', text: 'About' },
        { id: '#Interesting', text: 'Interesting Things' },
        { id: '#Boring', text: 'Boring Things' },
        { id: '#Contact', text: 'Contact' },
    ];
    return (
        <main class="myClass">
            <nav style={{ width: '100%' }}>
                <div >

                    <ul style={{ listStyleType: 'none', textDecoration: 'underline', }}>
                        {
                            list.map((el) =>
                            (<li>
                                <a href={el.id}>{el.text}</a>
                            </li>))
                        }
                    </ul>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas soluta non natus et
                        distinctio illo
                        doloremque quia ratione quasi. Maiores rem illum facilis veniam eius labore quasi sapiente,
                        reiciendis similique.
                    </p>
                </div>
            </nav>
            <article>
                <div>
                    <h1 style={{ padding: '20px' }}>Lorem Ipsum</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem corporis minima
                        facere officiis unde, maxime quis ullam laudantium ducimus ratione incidunt, voluptate recusandae dolor
                        inventore voluptatibus. Voluptatibus quisquam voluptate, quasi fugit dolor blanditiis est excepturi
                        commodi dolore, quis beatae qui, illum ut sed esse voluptas atque distinctio reiciendis quas quod
                        praesentium. Eveniet labore rem, ex accusamus illo accusantium quidem molestias! Atque fugit, similique
                        aperiam voluptatum aut repellendus aliquam, beatae voluptatibus inventore mollitia ipsum consequuntur
                        laborum impedit fugiat assumenda? Assumenda perspiciatis alias harum reiciendis mollitia sint
                        praesentium repudiandae id ratione nesciunt facilis nostrum labore, magnam veritatis commodi repellat
                        suscipit voluptatibus doloremque numquam maiores excepturi possimus minus. Assumenda consectetur
                        recusandae ipsa exercitationem consequatur aperiam accusantium vel praesentium ducimus. Laudantium,
                        totam praesentium, perspiciatis suscipit aut maiores quo esse architecto illo nemo fuga. Esse officia
                        culpa vel, dolor eius possimus temporibus ipsam officiis exercitationem. Exercitationem incidunt
                        tenetur, delectus maiores natus temporibus laudantium numquam corrupti! Voluptate sint rerum a
                        perferendis autem provident doloribus deserunt quam vero! Quasi at totam numquam voluptas delectus
                        suscipit obcaecati neque, beatae dolore mollitia quo soluta dolores tenetur harum illo magnam architecto
                        vero fuga sapiente ducimus? Possimus aliquam quis fuga! Id, impedit. Tempora, similique debitis? Veniam
                        assumenda atque natus explicabo.
                    </p>
                </div>
            </article>
        </main>
    )
}

export default Main;