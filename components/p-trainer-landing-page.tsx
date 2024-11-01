'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'
import Link from 'next/link'

export function PTrainerLandingPage() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const contactSectionRef = useRef<HTMLElement | null>(null)

  const testimonials = [
    {
      content: "이지훈 트레이너 덕분에 3개월 만에 체중을 10kg 감량할 수 있었습니다. 저에게 필요한 운동과 식단을 맞춤형으로 제공해 주셔서 큰 도움이 되었습니다.",
      author: "김지현 고객"
    },
    {
      content: "허리 통증이 심해 재활 트레이닝을 받았는데, 이지훈 트레이너의 세심한 지도 덕분에 빠르게 회복할 수 있었습니다. 이제는 더 건강하게 일상 생활을 즐기고 있습니다.",
      author: "이수민 고객"
    },
    {
      content: "항상 다이어트 계획만 있었지 실천에 옮기지 못하고 있었는데 온라인으로만으로도 코칭해주면 관리를 해주니 덕분에 다이어트 용기를 얻었어요~",
      author: "최지민 고객"
    }
  ]

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

  const scrollToContactSection = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg_se_color shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white"><span className="logo_color">P.</span>Trainer</Link>
          <Button className="hidden md:block bg-yellow-500 hover:bg-yellow-500 text-black" onClick={scrollToContactSection}>지금 상담하기</Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-100">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/images/hero_visual.jpg')" }}
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
          <div className="container mx-auto px-4 relative z-20 w-full content-center hero_visual">
            <div className="flex flex-col md:flex-row items-center w-full flex justify-center text-center">
              <div className="mb-10 md:mb-0 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">지속 가능한 건강한 라이프스타일,<br /> 지금 시작하세요!</h1>
                <p className="text-xl mb-8">고객과의 소통을 더욱 원활하게 만드는 최고의 코칭 앱</p>
                <Button className="bg-yellow-500 hover:bg-yellow-500 text-black text-lg px-8 py-6" onClick={scrollToContactSection}>지금 상담하기</Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/images/profile_img.jpg"
                alt="트레이너 이지훈"
                width={380}
                height={380}
                className="rounded-full mb-8 w-4/5 md:mb-0 md:mr-12 md:w-auto"
              />
              <div>
                <h2 className="text-3xl font-bold mb-12">트레이너 소개</h2>
                <p className="text-lg mb-6 text-gray-600">
                  안녕하세요, 저는 NASM 자격을 보유한 개인 트레이너 이지훈입니다. 7년간 다양한 고객을 대상으로 맞춤형 피트니스 프로그램을 제공해 왔으며, 체중 감량부터 근육 강화, 재활 트레이닝까지 폭넓은 경험을 쌓았습니다.
                </p>
                <p className="text-lg text-gray-600">
                  저의 트레이닝 철학은 &ldquo;건강한 습관을 통해 지속 가능한 라이프스타일을 만드는 것&rdquo;입니다. 고객의 목표와 현재 상태를 종합적으로 분석하여, 개인에게 최적화된 계획을 수립하고, 지속적인 피드백을 통해 목표를 달성할 수 있도록 돕습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">서비스 및 프로그램</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  copy: "Personalized Training",
                  title: "1:1 개인 맞춤형 트레이닝",
                  description: "고객의 목표와 현재 체력 수준에 맞춰 맞춤형 트레이닝 프로그램을 제공합니다.",
                  image: "/images/program_img01.jpg"
                },
                {
                  copy: "Yoga and Meditation Classes",
                  title: "요가 및 명상 클래스",
                  description: "유연성 증진 및 스트레스 해소를 위한 요가와 명상 프로그램을 제공합니다.",
                  image: "/images/program_img02.jpg"
                },
                {
                  copy: "Online Coaching Program",
                  title: "온라인 코칭 프로그램",
                  description: "바쁜 일정을 가진 고객을 위해 온라인으로도 맞춤형 트레이닝을 제공합니다.",
                  image: "/images/program_img03.jpg"
                },
                {
                  copy: "Small Group Training",
                  title: "소그룹 트레이닝 세션",
                  description: "친구나 가족과 함께할 수 있는 소그룹 세션을 통해 전문적인 트레이닝을 경험할 수 있습니다.",
                  image: "/images/program_img04.jpg"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image src={service.image} alt={service.title} width={400} height={200} className="w-full" />
                  <div className="p-8">
                    <p className="text-sm font-bold mb-1 text_main_color">{service.copy}</p>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">고객 후기</h2>
            <div className="md:flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`w-full md:w-1/3 flex-shrink-0 px-4 mb-4 md:mb-0 transition-opacity duration-500 ${
                    index === currentTestimonialIndex ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                    <Image
                      src="/images/review_profile.jpg"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full mb-4"
                    />
                    <p className="text-lg mb-4 text-gray-600">&ldquo;{testimonial.content}&rdquo;</p>
                    <p className="font-semibold">- {testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20 bg-gray-100" ref={contactSectionRef}>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/images/inquiry_img.jpg')" }}
          />
          <div className="absolute inset-0 bg-black opacity-60 z-10" />
          <div className="container mx-auto px-4 relative z-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">프로그램 예약 및 상담</h2>
            <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">이름 *</label>
                <Input type="text" id="name" required className="w-full" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">이메일 *</label>
                <Input type="email" id="email" required className="w-full" />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">연락처 *</label>
                <Input type="tel" id="phone" required className="w-full" />
              </div>
              <div className="mb-6">
                <label htmlFor="program" className="block text-gray-700 font-bold mb-2">관심 있는 프로그램 *</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">개인 트레이닝</SelectItem>
                    <SelectItem value="yoga">요가 클래스</SelectItem>
                    <SelectItem value="online">온라인 코칭</SelectItem>
                    <SelectItem value="group">소그룹 세션</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-6">
                <label htmlFor="goal" className="block text-gray-700 font-bold mb-2">목표 또는 요청 사항</label>
                <Textarea id="goal" rows={4} className="w-full resize-none" />
              </div>
              <div className="mb-8">
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">원하는 상담 또는 세션 시간 *</label>
                <Input type="datetime-local" id="date" required className="w-full" />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-yellow-500 hover:bg-yellow-500 text-black text-lg py-6"
              >
                상담 예약하기
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg_se_color text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4"><span className="logo_color">P.</span>Trainer</h3>
              <p>&copy; 2024 P.Trainer. All rights reserved.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <p>이메일: info@ptrainer.com</p>
              <p>전화: 02-1234-5678</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">팔로우</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-500"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="hover:text-yellow-500"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="hover:text-yellow-500"><Twitter className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}