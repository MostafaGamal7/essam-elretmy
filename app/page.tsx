"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Users,
  Heart,
  BookOpen,
  Briefcase,
  Star,
  Shield,
  Building,
  Award,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Target,
  Leaf,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sections = [
    { name: "الرئيسية", ref: heroRef },
    { name: "الإنجازات", ref: statsRef },
    { name: "نبذة عنا", ref: projectsRef },
    { name: "الخبرات", ref: experienceRef },
    { name: "التواصل", ref: contactRef },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const elementsToObserve = [
      heroRef,
      statsRef,
      projectsRef,
      experienceRef,
      testimonialsRef,
      contactRef,
    ];
    elementsToObserve.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-900 overflow-x-hidden"
      dir="rtl"
    >
      {/* Clean Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  اللواء عصام الرتمي
                </h1>
                <p className="text-xs text-gray-500">القيادة والتنمية</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              {sections.map((section) => (
                <button
                  key={section.name}
                  onClick={() => scrollToSection(section.ref)}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {section.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg">
            <div className="container mx-auto px-6 py-6 space-y-4">
              {sections.map((section) => (
                <button
                  key={section.name}
                  onClick={() => scrollToSection(section.ref)}
                  className="block w-full text-right text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2"
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="relative min-h-screen">
        <div className="h-[100px] w-[250px] absolute bottom-16 left-5 z-50 hidden md:block">
          <img
            src="/code.png"
            alt="Code"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="h-[60px] w-[150px] absolute top-24 left-5 z-50 md:hidden">
          <img
            src="/code.png"
            alt="Code"
            className="h-full w-full object-contain"
          />
        </div>
        <Image
          src="/hero/bg.webp"
          alt="اللواء عصام عبد الغني الرتمي"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-6 py-20">
          <div className="grid gap-12 items-center min-h-[calc(100vh-120px)]">
            {/* Content */}
            <div
              className={`space-y-8 text-white transition-all duration-1000 text-center md:text-start ${
                visibleSections.has("hero")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white">
                  <Target className="w-5 h-5 ml-3" />
                  <span className="text-sm font-medium">
                    مرشح مجلس الشيوخ 2025
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-14">
                  <div className="space-y-2">
                    <p className="text-xl md:text-4xl text-[#FFD900] font-medium">
                      أمين حزب الجبهة الوطنية بمحافظة الفيوم
                    </p>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                    اللواء عصام عبد الغني الرتمي
                  </h1>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed pt-4">
                  قائد عسكري سابق ورجل أعمال ملتزم، يحمل رؤية تنموية شاملة لخدمة
                  أبناء محافظة الفيوم وتحقيق التنمية المستدامة من خلال الخبرة
                  العملية والالتزام المجتمعي.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#FFCC00] rounded-full min-w-80 min-h-[70px] text-black hover:bg-yellow-300 p-[10px] text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  البرنامج الانتخابي
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection(contactRef)}
                  className="bg-[#193CB8] border rounded-full border-white min-w-80 min-h-[70px] text-white hover:bg-white hover:text-blue-600 p-[10px] text-lg transition-all duration-300 cursor-pointer"
                >
                  تواصل معنا
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection(statsRef)}
        >
          <div className="flex flex-col items-center space-y-2 text-white/70">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
            <span className="text-xs">اكتشف المزيد</span>
          </div>
        </div>
      </section>

      {/* Proven Numbers Section */}
      <section ref={statsRef} id="stats" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleSections.has("stats")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                شاركنا في تحقيق{" "}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-12">
              {[
                {
                  number: "19",
                  suffix: "+",
                  label: "سنة خدمة عسكرية",
                  description: "قيادة الأمن والإدارة، الانضباط والالتزام.",
                  color: "blue",
                },
                {
                  number: "4",
                  suffix: "",
                  label: "مؤسسات وشركات",
                  description: "توسيع البصمة التجارية عبر الأسواق المحلية.",
                  color: "green",
                },
                {
                  number: "10",
                  suffix: "x",
                  label: "نمو متوسط في المبادرات",
                  description:
                    "تسويق يركز على الأداء يحقق أقصى استفادة من كل جنيه.",
                  color: "purple",
                },
                {
                  number: "95",
                  suffix: "%",
                  label: "معدل الاحتفاظ بالمجتمع",
                  description:
                    "شراكات طويلة الأمد مبنية على نتائج حقيقية وقابلة للقياس.",
                  color: "orange",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ${
                    visibleSections.has("stats")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <span className={`text-6xl font-black text-gray-900`}>
                      {stat.number}
                    </span>
                    <span className={`text-4xl font-black text-blue-600`}>
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Profile & Vision Section */}
      <section ref={projectsRef} id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-6 text-center lg:text-start">
              نبذة شخصية
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Personal Profile Card */}
              <div
                className={`transition-all duration-1000 ${
                  visibleSections.has("projects")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white min-h-[400px]">
                  {/* Card Header */}
                  <div className="mb-6">
                    <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6">
                      <img src="/projects/card.png" alt="Card" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      الهوية والانتماء
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>المولد والنشأة:</strong> من مواليد محافظة
                        الفيوم، ينتمي لعائلة "الرتمي" ذات الحضور المجتمعي
                        المعروف
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>الانتماء السياسي:</strong> أمين حزب الجبهة
                        الوطنية بمحافظة الفيوم (تم اختياره في 27 مارس 2025)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>المرشح الانتخابي:</strong> مرشح فردياً عن محافظة
                        الفيوم بمجلس الشيوخ العام 2025 (رمز السيارة رقم 3)
                      </span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Vision & Values Card */}
              <div
                className={`transition-all duration-1000 delay-200 ${
                  visibleSections.has("projects")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white h-[400px]">
                  {/* Card Header */}
                  <div className="mb-6">
                    <div className="w-16 h-16  rounded-2xl flex items-center justify-center mb-6">
                      <img src="/projects/hand.png" alt="Hand" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      الرؤية والقيم
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>اهداف واضحة:</strong> عمل دؤوب قائم على مبدأ
                        خدمة المصلحة العامة وتحقيق النفع المشترك بين الناس
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>رؤية أخلاقية:</strong> التزام راسخ بالقيم
                        والمبادئ الأخلاقية النبيلة تجاه المجتمع، مع السعي لنشر
                        الخير والتعاون
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">
                        <strong>ترابط اجتماعي:</strong> القرب من الناس وفهم
                        احتياجاتهم والعمل على تلبية مطالبهم ودعم روابط المحبة
                        والانتماء
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Career Section */}
      <section
        ref={experienceRef}
        id="experience"
        className="py-24 bg-blue-600 text-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div
                className={`transition-all duration-1000 ${
                  visibleSections.has("experience")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <h2 className="text-4xl font-bold mb-6">
                  المسيرة المهنية والخبرات
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  مسيرة حافلة بالخبرات المتنوعة في الأمن والأعمال والعمل
                  المجتمعي. إليك كيف بنيت خبراتي عبر السنوات.
                </p>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection(contactRef)}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium bg-transparent"
                >
                  تواصل معنا
                  <ArrowRight className="w-4 h-4 mr-2" />
                </Button>
              </div>

              {/* Right Career Steps */}
              <div
                className={`space-y-12 transition-all duration-1000 delay-300 ${
                  visibleSections.has("experience")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                {[
                  {
                    number: "01",
                    title: "المسيرة الأمنية",
                    timeframe: "2000 - 2019",
                    description:
                      "تخرج من كلية الشرطة عام 2000، خدم في وزارة الداخلية لمدة 19 عاماً، تقاعد برتبة لواء عام 2019، خبرة واسعة في الأمن والإدارة.",
                    icon: Shield,
                    color: "blue",
                  },
                  {
                    number: "02",
                    title: "رجل الأعمال",
                    timeframe: "2019 - الآن",
                    description:
                      "رئيس مجلس إدارة 'الرتمي جروب'، رئيس مجلس إدارة مصانع MNY، رئيس مصنع المريم للصناعات الكيميائية، استثمارات متنوعة في الفيوم.",
                    icon: Briefcase,
                    color: "green",
                  },
                  {
                    number: "03",
                    title: "العمل المجتمعي",
                    timeframe: "أكثر من 10 سنوات",
                    description:
                      "مؤسس مؤسسة عصام الرتمي للتنمية، دعم الأسر المحتاجة، مبادرات صحية واجتماعية، خدمات في أوقات الطوارئ.",
                    icon: Heart,
                    color: "orange",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-6 space-x-reverse"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 space-x-reverse mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <span className="text-sm text-blue-200 bg-white/10 px-3 py-1 rounded-full">
                          {step.timeframe}
                        </span>
                      </div>
                      <p className="text-blue-100 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects and Initiatives Section */}
      <section
        ref={testimonialsRef}
        id="testimonials"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Banner */}
            <div
              className={`mb-16 transition-all duration-1000 ${
                visibleSections.has("testimonials")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2
                className="text-4xl font-bold text-gray-900 mb-8 text-center
              "
              >
                المشروعات والمبادرات
              </h2>
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-4xl font-bold mb-4">مبادرة SADIQ - صديق</h2>
                <p className="text-xl mb-2">
                  الاستدامة، التقدم، التنمية، الابتكار والجودة
                </p>
                <p className="text-lg mb-4">
                  Sustainability, Advancement, Development, Innovation & Quality
                </p>
                <p className="text-blue-100 leading-relaxed">
                  مبادرة رائدة تهدف إلى تحويل مركز يوسف الصديق إلى نموذج عالمي
                  للتنمية المستدامة، مستفيداً من الموارد الطبيعية والبشرية
                  لتعزيز الزراعة الذكية، الصناعة المتكاملة، السياحة البيئية،
                  والطاقة الخضراء.
                </p>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "التعليم وبناء القدرات",
                  subtitle: "Capacity Building & Education",
                  description:
                    "تطوير نظام تعليمي متكامل يربط التعليم بسوق العمل والواقع المحلي",
                  icon: BookOpen,
                  features: [
                    "المدرسة المجتمعية المملوكة للأهالي",
                    "التعليم المهني المدمج",
                    "المنصات التعليمية الرقمية",
                    "برامج التعلم بالخدمة",
                  ],
                },
                {
                  title: "الزراعة الذكية والإنتاج",
                  subtitle: "Smart Agriculture & Agri-Production",
                  description:
                    "تحويل نمط الزراعة التقليدية إلى منظومة ذكية تعتمد على المحاصيل عالية القيمة",
                  icon: Users,
                  features: [
                    "العقود الزراعية المضمونة",
                    "وحدات تحليل التربة",
                    "التدريب على التكنولوجيا الزراعية",
                    "الإدارة الحديثة للمزارع",
                  ],
                },
                {
                  title: "التصنيع الريفي والغذائي",
                  subtitle: "Rural Agro-Industrial Development",
                  description:
                    "إنشاء وحدات تصنيع صغيرة داخل القرية لتعزيز القيمة المضافة للمحاصيل",
                  icon: Briefcase,
                  features: [
                    "وحدات التجفيف والتعبئة",
                    "صناعة الصابون العشبي",
                    "فرص عمل للنساء والشباب",
                    "التكامل مع السوق المجتمعي",
                  ],
                },
                {
                  title: "التجارة والتسويق المجتمعي",
                  subtitle: "Community Trade & Rural Market Access",
                  description:
                    "يشمل الأسواق المجتمعية، التجارة الإلكترونية، وتمكين المنتجين من الوصول للأسواق",
                  icon: Building,
                  features: [
                    "الأسواق المجتمعية المحلية",
                    "منصات التجارة الإلكترونية",
                    "التصدير والوصول للأسواق",
                    "شبكات التوزيع المحلية",
                  ],
                },
                {
                  title: "الصحة والرعاية المجتمعية",
                  subtitle: "Community Health & Social Care",
                  description:
                    "الصحة والرعاية المجتمعية من خلال وحدة صحية قائمة على الشراكة الأهلية",
                  icon: Heart,
                  features: [
                    "الرعاية الأساسية لجميع فئات المجتمع",
                    "مساهمات المغتربين",
                    "صندوق الرعاية المجتمعي",
                    "برامج الوقاية والنوعية",
                  ],
                },
                {
                  title: "التمكين المجتمعي والحكومة",
                  subtitle: "Participatory Governance & Community Empowerment",
                  description:
                    "التمكين المجتمعي والإدارة الذاتية عبر تشكيل الجمعيات الأهلية التشاركية",
                  icon: Award,
                  features: [
                    "صناديق الاستثمار المجتمعي",
                    "مجالس الإشراف القروية المنتخبة",
                    "الشفافية والمساءلة",
                    "المشاركة الفعلية للمواطنين",
                  ],
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className={`p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white ${
                    visibleSections.has("testimonials")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4 space-x-reverse mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <project.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 space-x-reverse"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Priorities and Electoral Program Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleSections.has("testimonials")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl font-bold mb-8">
                الأولويات والبرنامج الانتخابي
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "مشكلات الري والزراعة",
                  icon: Leaf,
                  color: "green",
                  borderColor: "border-green-500",
                  bgColor: "bg-green-100",
                  iconColor: "text-green-600",
                  items: [
                    "حل مشكلات الري في الفيوم",
                    "تطهير الترع والتحديث التقني لنظم الري",
                    "ترشيد استهلاك المياه",
                    "دعم المزارعين في قرى يوسف الصديق وأبشواي",
                  ],
                },
                {
                  title: "المشروعات الصحية والاجتماعية",
                  icon: Heart,
                  color: "blue",
                  borderColor: "border-blue-500",
                  bgColor: "bg-blue-100",
                  iconColor: "text-blue-600",
                  items: [
                    "مشروع مستشفى خيري عالمي قيد الإطلاق",
                    "توسيع القاعدة الاستثمارية في الفيوم",
                    "مبادرات صحية ورفاهية شاملة",
                    "دعم الأسر المحتاجة والشباب",
                  ],
                },
              ].map((priority, index) => (
                <Card
                  key={index}
                  className={`p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white relative overflow-hidden ${
                    visibleSections.has("testimonials")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Colored Border */}
                  <div
                    className={`absolute top-0 left-0 w-2 h-full ${priority.borderColor}`}
                  ></div>
                  <div
                    className={`absolute top-0 left-0 w-full h-1 ${priority.borderColor}`}
                  ></div>
                  <div
                    className={`absolute top-0 right-0 w-1 h-full ${priority.borderColor}`}
                  ></div>
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 ${priority.borderColor}`}
                  ></div>

                  <div className="flex items-center space-x-4 space-x-reverse mb-6">
                    <div
                      className={`w-16 h-16 ${priority.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <priority.icon
                        className={`w-8 h-8 ${priority.iconColor}`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">
                        {priority.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {priority.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start space-x-3 space-x-reverse"
                      >
                        <div
                          className={`w-2 h-2 ${priority.bgColor} rounded-full flex-shrink-0 mt-2`}
                        ></div>
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark Media Interviews Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "برنامج حقائق وأسرار",
                  subtitle: "مع الإعلامي مصطفى بكري - قناة صدى البلد",
                  description:
                    "لقاء شامل يتناول مسيرة اللواء عصام الرتمي المهنية والاستثمارية ورؤيته للتنمية في محافظة الفيوم.",
                  thumbnail: "/interviews/secondVideo.png",
                  link: "https://www.youtube.com/watch?v=Otc9Awo0qT0",
                },
                {
                  title: "سر النجاح للشباب",
                  subtitle: "قناة الحدث اليوم",
                  description:
                    "لقاء ملهم يقدم فيه اللواء عصام الرتمي نصائح وتوجيهات قيمة للشباب حول النجاح وريادة الأعمال.",
                  thumbnail: "/interviews/firstVideo.png",
                  link: "https://www.youtube.com/watch?v=qJQEA3I6oy0",
                },
              ].map((interview, index) => (
                <Card
                  key={index}
                  className={`p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white ${
                    visibleSections.has("testimonials")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4 space-x-reverse mb-4">
                    <img src="/interviews/playbtn.png" alt="Play Button" />
                    <div className="flex-1">
                      <h3 className="text-xl text-[#1C398E] mb-1">
                        {interview.title}
                      </h3>
                      <p className="text-sm text-[#737373] mb-2">
                        {interview.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 relative">
                    <Image
                      src={interview.thumbnail}
                      alt={interview.title}
                      width={400}
                      height={300}
                      className="w-full object-cover rounded-lg"
                    />
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {interview.description}
                  </p>

                  <a
                    href={interview.link}
                    target="_blank"
                    className="flex items-center justify-center text-center w-full bg-red-600 hover:bg-red-700 text-white py-3 !rounded-lg font-medium transition-all duration-300"
                  >
                    مشاهدة اللقاء
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent mr-2"></div>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleSections.has("contact")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                التواصل المباشر
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                نحن هنا للإجابة على استفساراتكم ومناقشة المبادرات والمشاريع
                التنموية
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div
                className={`transition-all duration-1000 ${
                  visibleSections.has("contact")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  معلومات التواصل
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      label: "رقم الهاتف",
                      value: "01091300928",
                      color: "green",
                    },
                    {
                      icon: Mail,
                      label: "البريد الإلكتروني",
                      value: "dieuxeg@gmail.com",
                      color: "blue",
                    },
                    {
                      icon: MapPin,
                      label: "العنوان",
                      value: "الراوضة - الشواشنة، يوسف الصديق - الفيوم",
                      color: "red",
                    },
                    {
                      icon: Users,
                      label: "الانتماء السياسي",
                      value: "حزب الجبهة الوطنية",
                      color: "purple",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 space-x-reverse"
                    >
                      <div
                        className={`w-12 h-12 bg-${contact.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <contact.icon
                          className={`w-6 h-6 text-${contact.color}-600`}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {contact.label}
                        </h4>
                        <p className="text-gray-600">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organizations */}
              <div
                className={`transition-all duration-1000 delay-300 ${
                  visibleSections.has("contact")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  المؤسسات والشركات
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "الرتمي جروب",
                      role: "رئيس مجلس الإدارة",
                      description: "مجموعة شركات متنوعة في مجالات مختلفة",
                      color: "blue",
                    },
                    {
                      name: "صنائع MNY",
                      role: "رئيس مجلس الإدارة",
                      description: "إعادة تدوير وتصنيع الورق والمنتجات البيئية",
                      color: "green",
                    },
                    {
                      name: "مصنع المريم",
                      role: "رئيس مجلس الإدارة",
                      description: "الصناعات الكيماوية والمنتجات الصناعية",
                      color: "orange",
                    },
                    {
                      name: "مؤسسة عصام الرتمي",
                      role: "المؤسس والرئيس",
                      description: "للتنمية المجتمعية والأعمال الخيرية",
                      color: "purple",
                    },
                  ].map((org, index) => (
                    <Card
                      key={index}
                      className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-start space-x-4 space-x-reverse">
                        <div
                          className={`w-10 h-10 bg-${org.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <Building
                            className={`w-5 h-5 text-${org.color}-600`}
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">
                            {org.name}
                          </h4>
                          <p
                            className={`text-${org.color}-600 text-sm font-medium mb-2`}
                          >
                            {org.role}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {org.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse mb-6 md:mb-0">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  اللواء عصام عبد الغني الرتمي
                </h3>
                <p className="text-gray-400">
                  أمين حزب الجبهة الوطنية - محافظة الفيوم
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © {new Date().getFullYear()} جميع الحقوق محفوظة{" "}
                <a
                  className="text-white"
                  href="https://www.elfayomy.com/en"
                  target="_blank"
                >
                  احمد الفيومي
                </a>{" "}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                "نحن لا نتبع الاتجاهات — نحن نصنعها"
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
