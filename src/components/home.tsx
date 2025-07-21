import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import NavigationMenu from "./NavigationMenu";
import TestimonialCarousel from "./TestimonialCarousel";
import { CalendarIcon, Clock, MapPin, Users } from "lucide-react";

const HomePage = () => {
  // Meeting data for the homepage - meetings on 1st, 3rd, and 5th Sundays
  const getUpcomingMeetings = () => {
    const now = new Date();
    const meetings = [];
    
    // Get next few months of 1st, 3rd, and 5th Sundays
    for (let month = 0; month < 3; month++) {
      const currentMonth = new Date(now.getFullYear(), now.getMonth() + month, 1);
      const firstSunday = new Date(currentMonth);
      firstSunday.setDate(1 + (7 - firstSunday.getDay()) % 7);
      
      // 1st Sunday
      if (firstSunday >= now) {
        meetings.push({
          id: `${currentMonth.getMonth()}-1`,
          title: "Regular Meeting",
          date: firstSunday.toLocaleDateString('en-AU', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          time: "2:00 PM - 4:00 PM",
          location: "Meeting Room, Club Central Hurstville",
          description: "Join us for prepared speeches, table topics, and evaluations in our supportive environment.",
        });
      }
      
      // 3rd Sunday
      const thirdSunday = new Date(firstSunday);
      thirdSunday.setDate(firstSunday.getDate() + 14);
      if (thirdSunday >= now) {
        meetings.push({
          id: `${currentMonth.getMonth()}-3`,
          title: "Regular Meeting",
          date: thirdSunday.toLocaleDateString('en-AU', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          time: "2:00 PM - 4:00 PM",
          location: "Meeting Room, Club Central Hurstville",
          description: "Continue your Toastmasters journey with speeches, impromptu speaking, and leadership roles.",
        });
      }
      
      // 5th Sunday (if exists)
      const fifthSunday = new Date(firstSunday);
      fifthSunday.setDate(firstSunday.getDate() + 28);
      if (fifthSunday.getMonth() === currentMonth.getMonth() && fifthSunday >= now) {
        meetings.push({
          id: `${currentMonth.getMonth()}-5`,
          title: "Regular Meeting",
          date: fifthSunday.toLocaleDateString('en-AU', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          time: "2:00 PM - 4:00 PM",
          location: "Meeting Room, Club Central Hurstville",
          description: "Special meeting day - perfect opportunity for new members and guests to join us!",
        });
      }
    }
    
    return meetings.slice(0, 2); // Return next 2 meetings
  };
  
  const upcomingMeetings = getUpcomingMeetings();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
        <NavigationMenu />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-800 text-white py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-cyan-800/90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-3/5">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Welcome to <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Hurstville Weekend</span> Toastmasters
              </h1>
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-2xl mb-6 inline-block shadow-xl">
                <p className="font-bold text-lg">CHANGING LIVES - ONE SPEECH AT A TIME! FOR 30 YEARS!!</p>
              </div>
              <p className="text-2xl mb-3 font-semibold bg-gradient-to-r from-sky-200 to-blue-200 bg-clip-text text-transparent">
                The Shaolin temple of public speaking and leadership development!
              </p>
              <p className="text-xl mb-8 opacity-90 max-w-2xl leading-relaxed">
                We are a fun and friendly group interested in presentation, impromptu speaking, 
                storytelling and communication. Even the most shy can become future leaders! 
                We believe that even the timid, the most shy and easily embarrassed of peoples can become future leaders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <Link to="/join">Join Our Community</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-2 border-sky-200/50 hover:border-blue-200/70 backdrop-blur-sm text-white hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <Link to="/meetings">Visit a Meeting</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&q=80"
                  alt="Public speaking"
                  className="relative rounded-3xl shadow-2xl max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              About Our Club
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Hurstville Weekend Toastmasters has been changing lives for 30 years! 
              We provide a supportive and positive learning experience where members 
              develop communication and leadership skills, resulting in greater 
              self-confidence and personal growth. We welcome people from diverse backgrounds 
              including those who speak English as a second language, creative writers, 
              professionals, and anyone wanting to be inspired by personal stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  Fun & Friendly Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We are a fun and friendly group interested in presentation, 
                  impromptu speaking, storytelling and communication. Even the 
                  most shy can become future leaders!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  Weekend Convenience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We meet on Sundays 2-4pm, making it convenient for busy 
                  professionals who can't attend weekday meetings. Perfect for 
                  weekend availability!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CalendarIcon className="h-6 w-6 text-white" />
                  </div>
                  Regular Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We meet every fortnight on the 1st, 3rd, and 5th Sundays of 
                  each month. Consistent schedule with great location near 
                  Hurstville station.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-40 h-40 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-32 h-32 bg-gradient-to-tl from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Member Success Stories
            </span>
          </h2>
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Upcoming Meetings */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Upcoming Meetings
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {upcomingMeetings.map((meeting) => (
              <Card
                key={meeting.id}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {meeting.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-lg font-medium text-gray-700">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-2 rounded-xl">
                      <CalendarIcon className="h-5 w-5 text-white" />
                    </div>
                    {meeting.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{meeting.time}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 p-2 rounded-xl">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{meeting.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{meeting.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border-blue-200 hover:border-cyan-300 text-blue-700 hover:text-cyan-700 font-semibold transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-semibold"
            >
              <Link to="/meetings">View All Meetings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Planning to Visit?
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We'd love to have you join us! Here's what you need to know:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  Location & Directions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-4 rounded-2xl border border-sky-100">
                  <p className="font-semibold text-gray-800">Meeting Room, Club Central Hurstville</p>
                  <p className="text-gray-700">2 Crofts Ave, Hurstville NSW 2220</p>
                  <p className="text-sm text-blue-600 font-medium">(Downstairs opposite Ozeki Sushi)</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-200">
                  <p className="text-sm">
                    <strong className="text-orange-700">Important:</strong> Please sign in at Club Central reception 
                    before going downstairs to our meeting room.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-100">
                  <p className="text-sm text-gray-700">
                    🚗 Free parking at Club Central or Westfield Hurstville<br/>
                    🚊 Walking distance from Hurstville train station
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CalendarIcon className="h-6 w-6 text-white" />
                  </div>
                  Meeting Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-100">
                  <p className="font-semibold text-gray-800">Every Sunday 2:00 PM - 4:00 PM</p>
                  <p className="text-gray-700">1st, 3rd, and 5th Sundays of each month</p>
                </div>
                <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
                  <p className="text-sm">
                    <strong className="text-green-700">Contact before visiting:</strong><br/>
                    Quang - <a href="tel:0414889018" className="text-green-600 hover:text-green-800 font-medium hover:underline transition-colors">0414 889 018</a>
                  </p>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-sky-50 p-4 rounded-2xl border border-cyan-100">
                  <p className="text-sm text-gray-700">
                    New visitors are always welcome! No preparation needed - 
                    just come along and see what we're all about.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Transform</span> Your Communication?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Join Hurstville Weekend Toastmasters today and start your journey
            toward becoming a confident and effective communicator.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 px-10 py-4 text-xl font-bold"
              asChild
            >
              <Link to="/join">Express Interest</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-2 border-sky-200/50 hover:border-blue-200/70 backdrop-blur-sm text-white hover:text-white shadow-2xl hover:shadow-white/10 transition-all duration-300 transform hover:scale-105 px-10 py-4 text-xl font-bold"
              asChild
            >
              <a href="tel:0414889018">Call Quang - 0414 889 018</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Hurstville Weekend Toastmasters
              </h3>
              <p className="mb-6 text-gray-300 leading-relaxed">
                A supportive community dedicated to improving communication and
                leadership skills for over 30 years.
              </p>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Hurstville Weekend Toastmasters
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/meetings"
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    Meetings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/join"
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/membership"
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    Full Membership
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <p className="text-sky-300 font-medium mb-1">Meeting Location:</p>
                  <p className="text-white text-sm">Meeting Room, Club Central Hurstville</p>
                  <p className="text-white text-sm">2 Crofts Ave, Hurstville NSW 2220</p>
                  <p className="text-xs text-sky-300">(Downstairs opposite Ozeki Sushi)</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <p className="text-blue-300 font-medium mb-1">Meeting Times:</p>
                  <p className="text-white text-sm">Sundays 2-4pm</p>
                  <p className="text-xs text-blue-300">(1st, 3rd & 5th Sundays)</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <p className="text-cyan-300 font-medium mb-2">Contact:</p>
                  <p className="text-sm mb-1">
                    Quang - <a href="tel:0414889018" className="text-cyan-300 hover:text-white transition-colors font-medium">0414 889 018</a>
                  </p>
                  <p className="text-xs">
                    <a
                      href="mailto:info@hurstvilleweekend.toastmastersclubs.org"
                      className="text-cyan-300 hover:text-white transition-colors"
                    >
                      info@hurstvilleweekend.toastmastersclubs.org
                    </a>
                  </p>
                </div>
                
                <div className="text-xs text-gray-400 bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
                  🚗 Free parking at Club Central or Westfield<br/>
                  🚊 Near Hurstville train station
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <p className="text-sky-300 font-medium mb-2">Follow Us:</p>
                  <div className="flex gap-3">
                    <a 
                      href="https://www.facebook.com/groups/hurstvilleweekendtoastmasters" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white transition-colors text-sm"
                    >
                      📘 Facebook
                    </a>
                    <a 
                      href="https://www.meetup.com/hurstville-weekend-toastmasters" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-300 hover:text-white transition-colors text-sm"
                    >
                      🤝 MeetUp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-12 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          <div className="text-center text-gray-400 text-sm leading-relaxed">
            <p>
              Toastmasters International and all other Toastmasters
              International trademarks and copyrights are the sole property of
              Toastmasters International.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
