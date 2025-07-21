import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sara Safari, DTM",
    title: "Teacher, Humanitarian",
    quote: "Before Toastmasters, I didn't really have the confidence to talk with other people and share myself. After Toastmasters, I got myself back. I got confidence back.",
    rating: 5,
  },
  {
    id: 2,
    name: "Andrew Clumpus",
    title: "Financial Analyst, 2015 International Speech Contest Semi-finalist",
    quote: "They taught me that it's okay to be nervous. It's about taking that nervous energy and turning it into positive energy. Toastmasters is really good at helping you build confidence.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jing Humphreys, DTM",
    title: "Senior Chemist, Sonneborn, LLC",
    quote: "I have been promoted at my job six times since becoming a Toastmaster. Every speaking and leadership opportunity advances your own skills and helps others along the way. The question you should be asking yourself is, 'Why didn't I join a club sooner?'",
    rating: 5,
  },
  {
    id: 4,
    name: "Roger Caesar, ACB, ALB",
    title: "Owner and President, Caesar Transport, Inc., 2015 International Speech Contest Semi-finalist",
    quote: "I ran a company, and it was very challenging for me to communicate one-on-one or in small groups. Because of my Toastmasters training, I am a more confident leader.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Quote className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg font-bold text-white mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-blue-200 text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
