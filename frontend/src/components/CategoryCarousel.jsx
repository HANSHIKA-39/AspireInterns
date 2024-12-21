import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious,CarouselNext } from './ui/carousel'
import { Button } from './ui/button'

const category=[
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Data Science",
]

function CategoryCarousel() {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {
            category.map((item, index) => (
              <CarouselItem className="md:basis-1/3 lg-basis-1/4" key={index}>
                  <Button variant="outline" className="rounded-full ">{item}</Button>
              </CarouselItem>
            ))
          }

        </CarouselContent><CarouselPrevious/><CarouselNext/>
      </Carousel>
    </div>
  )
}

export default CategoryCarousel
