import Card from "./Card"

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="container mx-auto">
        <div className="deck flex flex-wrap">
            <Card review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis laboriosam rerum natus, blanditiis laborum nisi impedit repellendus neque pariatur maxime soluta tenetur beatae, ab nesciunt sequi nihil, optio tempore."} client={{
                clientName : "Aditya Jadon",
                designation : "Web Devloper",
                imgUrl : "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            }}/>
            <Card review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis laboriosam rerum natus, blanditiis laborum nisi impedit repellendus neque pariatur maxime soluta tenetur beatae, ab nesciunt sequi nihil, optio tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis laboriosam rerum natus, blanditiis laborum "} client={{
                clientName : "Aditya Jadon",
                designation : "Web Devloper",
                imgUrl : "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            }}/>
            <Card review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis laboriosam rerum natus, blanditiis laborum nisi impedit repellendus neque pariatur maxime soluta tenetur beatae, ab nesciunt sequi nihil, optio tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. "} client={{
                clientName : "Aditya Jadon",
                designation : "Web Devloper",
                imgUrl : "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            }}/>
            <Card review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis laboriosam rerum natus, blanditiis laborum nisi impedit repellendus neque pariatur maxime soluta tenetur beatae, ab nesciunt sequi nihil, optio tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis laboriosam rerum natus, blanditiis laborum nisi impedit repellendus neque pariatur."} client={{
                clientName : "Aditya Jadon",
                designation : "Web Devloper",
                imgUrl : "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
            }}/>
            
        </div>
      </div>
    </div>
  )
}

export default Testimonials
