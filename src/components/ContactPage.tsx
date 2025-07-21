import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NavigationMenu from "./NavigationMenu";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Info,
  Facebook,
  Users,
  ExternalLink
} from "lucide-react";

const ContactPage = () => {
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
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Get In <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto">
            We'd love to hear from you! Reach out with any questions or to plan your visit
          </p>
        </div>
      </section>

      {/* Main Contact Information */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-8">
                  Contact Information
                </h2>
              </div>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-3">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    Primary Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-2xl border border-sky-100">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Quang</h3>
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 justify-start"
                        asChild
                      >
                        <a href="tel:0414889018">
                          <Phone className="h-4 w-4 mr-3" />
                          0414 889 018
                        </a>
                      </Button>
                      <p className="text-sm text-gray-600 italic mt-4">
                        "I may buy you a coffee if you come! But no promises!"
                      </p>
                      <p className="text-sm text-blue-600">
                        If it's too hard to follow directions, just give me a call and I'll sign you in!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    Email Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                    <Button 
                      variant="outline"
                      className="w-full bg-white/50 hover:bg-white border-blue-200 hover:border-blue-300 text-blue-700 justify-start"
                      asChild
                    >
                      <a href="mailto:info@hurstvilleweekend.toastmastersclubs.org">
                        <Mail className="h-4 w-4 mr-3" />
                        info@hurstvilleweekend.toastmastersclubs.org
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button 
                      variant="outline"
                      className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 justify-start"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-4 w-4 mr-3" />
                        Facebook
                        <ExternalLink className="h-3 w-3 ml-auto" />
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="bg-red-500 hover:bg-red-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 justify-start"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Users className="h-4 w-4 mr-3" />
                        MeetUp
                        <ExternalLink className="h-3 w-3 ml-auto" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Follow us on social media for updates about meetings and events!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Location & Meeting Info */}
            <div className="space-y-8">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    Meeting Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-100">
                    <h3 className="font-bold text-gray-800 text-lg mb-4">Meeting Room, Club Central Hurstville</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 mt-1 text-cyan-600" />
                        <div>
                          <p className="font-medium">2 Crofts Ave, Hurstville NSW 2220</p>
                          <p className="text-sm text-blue-600">(Downstairs opposite Ozeki Sushi)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                    <div className="flex items-start gap-3">
                      <Info className="h-5 w-5 mt-1 text-orange-600" />
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-2">Important Visitor Information:</h4>
                        <p className="text-sm text-gray-700">
                          Please remember to <strong>sign in at the club reception</strong> before coming downstairs 
                          to our meeting. Club Central requires visitor registration for all guests.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-3">Getting There:</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <span>🚗</span>
                        <span>Free parking at Club Central or Westfield Hurstville</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🚊</span>
                        <span>Walking distance from Hurstville train station</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🛒</span>
                        <span>Near Westfield shopping center and Asian groceries</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                <CardHeader className="pb-6">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    Meeting Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <h3 className="font-bold text-gray-800">Every Sunday 2:00 PM - 4:00 PM</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      We meet on the <strong>1st, 3rd, and 5th Sundays</strong> of each month
                    </p>
                    <div className="text-sm text-blue-600 bg-white/50 p-3 rounded-lg">
                      <p><strong>Note:</strong> We meet every fortnight, which means some months we have 2 meetings, others have 3!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Quick Actions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-4">Call Quang</h3>
                <Button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700" asChild>
                  <a href="tel:0414889018">0414 889 018</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-4">Send Email</h3>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700" asChild>
                  <a href="mailto:info@hurstvilleweekend.toastmastersclubs.org">Email Us</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-4">Join Us</h3>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-600 hover:to-cyan-700" asChild>
                  <a href="/join">Express Interest</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Do I need to prepare anything for my first visit?</h3>
                <p className="text-gray-700">
                  No preparation needed! Just come along and see what we're all about. 
                  New visitors are always welcome, and we'll make sure you feel comfortable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What should I expect at my first meeting?</h3>
                <p className="text-gray-700">
                  You'll experience our friendly, supportive atmosphere with prepared speeches, 
                  table topics (impromptu speaking), and evaluations. You'll be introduced as a 
                  guest and can participate as much or as little as you're comfortable with.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Is there a cost to visit?</h3>
                <p className="text-gray-700">
                  Visiting is free! You can attend several meetings as a guest before deciding 
                  if you'd like to become a member. We want you to be sure Toastmasters is right for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            The best way to understand Toastmasters is to experience it yourself. 
            Contact us today to plan your visit!
          </p>
          <Button 
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-4 text-xl font-bold"
            asChild
          >
            <a href="tel:0414889018">Call Quang Now - 0414 889 018</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 