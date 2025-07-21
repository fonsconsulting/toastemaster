import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NavigationMenu from "./NavigationMenu";
import { 
  BookOpen, 
  Users, 
  Award, 
  FileText,
  Phone
} from "lucide-react";

const ResourcesPage = () => {
  const resources = [
    {
      title: "Meeting Roles",
      description: "Learn about the various roles in a Toastmasters meeting and how to excel in each one.",
      icon: <Users className="h-8 w-8" />,
      items: ["Toastmaster of the Day", "Table Topics Master", "General Evaluator", "Timer", "Ah-Counter"]
    },
    {
      title: "Speech Resources", 
      description: "Tools and tips to help you prepare and deliver outstanding speeches.",
      icon: <BookOpen className="h-8 w-8" />,
      items: ["Speech Planning", "Vocal Variety", "Body Language", "Speech Organization", "Visual Aids"]
    },
    {
      title: "Leadership Resources",
      description: "Develop your leadership skills through Toastmasters programs and opportunities.", 
      icon: <Award className="h-8 w-8" />,
      items: ["Officer Roles", "Mentoring", "Leadership Projects", "Club Management", "District Programs"]
    },
    {
      title: "Club Documents",
      description: "Access important club documents, forms, and meeting materials.",
      icon: <FileText className="h-8 w-8" />,
      items: ["Meeting Agendas", "Evaluation Forms", "Club Constitution", "Meeting Schedules", "Contact Lists"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
        <NavigationMenu />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-800 text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-cyan-800/90"></div>
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Resources</span> & Tools
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Everything you need to excel in your Toastmasters journey
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {resource.icon}
                    </div>
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl">
                    <h3 className="font-semibold text-gray-800 mb-3">Topics Include:</h3>
                    <ul className="space-y-1">
                      {resource.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for More Info */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Need More Information?
            </span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our club for detailed resources and personalized guidance
          </p>
          <Button 
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-4 text-xl font-bold"
            asChild
          >
            <a href="tel:0414889018">
              <Phone className="h-5 w-5 mr-3" />
              Call Quang - 0414 889 018
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage; 