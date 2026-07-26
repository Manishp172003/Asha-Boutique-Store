import { Star } from 'lucide-react'

const Testimonials = ({ testimonials }) => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#E9E3DD]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl lg:text-5xl font-semibold text-[#2B1E1A] mb-12">Client Love</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-[22px] p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-[#2B1E1A]">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[#E46A53] text-[#E46A53]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#7A655D] italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
