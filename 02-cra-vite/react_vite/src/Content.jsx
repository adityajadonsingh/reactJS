import Card from './Card'

const Content = () =>{
    return (
        <main>
        <h2>Random Text</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem alias quo incidunt aliquid doloribus libero mollitia maiores itaque rerum obcaecati iure quam, molestiae sunt expedita. Nesciunt nam est vitae maiores repudiandae animi reiciendis voluptate, aperiam placeat aspernatur cum ad ea possimus doloremque. Delectus molestias minima pariatur aspernatur quas incidunt nemo totam explicabo nobis iste quibusdam eligendi praesentium rem optio, recusandae qui asperiores corporis ducimus quod! Dolores labore ipsam magnam nulla, cupiditate voluptatibus blanditiis dolorum perspiciatis natus sunt at, aut qui harum quia! Hic quasi expedita quia quo rerum libero eligendi, dolores accusamus quibusdam et incidunt reprehenderit omnis! Pariatur, at.</p>
        <Card user={{name : "Aditya", age : 23, blood : "B+", skills : {skill1 : "html", skill2 : "css"}}}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia omnis nulla expedita dolore sunt veritatis repellendus sit nesciunt sed quam sint ullam provident, ad doloremque asperiores dolorum, beatae, perspiciatis molestias? Quis ut deserunt exercitationem blanditiis odit maiores nesciunt veniam ducimus! Fugiat, culpa repellendus! Dignissimos quaerat natus reprehenderit fugiat porro!</p>
      </main>
    )
}

export default Content;