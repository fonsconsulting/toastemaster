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
            <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Communicate with</span><br/>
            Confidence
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto">
            Join us to enhance your public speaking and leadership skills in a supportive community
          </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <Link to="/join">Join as Member</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-2 border-sky-200/50 hover:border-blue-200/70 backdrop-blur-sm text-white hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <Link to="/meetings">Register as Guest</Link>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Empowering Public Speaking and Leadership
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We are a vibrant Toastmasters club based in Hurstville, Sydney, dedicated to helping members 
                develop their public speaking and leadership skills in a friendly and supportive environment.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-30"></div>
                <img
                  src="/images/IMG-20240818-WA0020.jpg"
                  alt="Hurstville Weekend Toastmasters meeting in progress"
                  className="relative rounded-3xl shadow-2xl max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We provide a positive and empowering learning experience in which members 
              are supported to develop effective communication and leadership abilities, 
              resulting in greater self-confidence and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-2xl">
                  <img
                    src="/images/IMG-20250202-WA0002.jpg"
                    alt="Skill Development Session"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Skill Development Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Participate in engaging sessions focused on improving communication and leadership 
                  abilities for personal growth.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-2xl">
                  <img
                    src="/images/IMG-20250706-WA0005.jpg"
                    alt="Supportive Community"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Supportive Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Become part of a vibrant community that encourages self-confidence and fosters 
                  personal development through practice.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-2xl">
                  <img
                    src="/images/IMG-20250706-WA0007.jpg"
                    alt="Friendly Environment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  Friendly Environment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Experience a welcoming atmosphere where members uplift each other and share valuable 
                  feedback for improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer-Led, Community-Run */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Volunteer-Led, Community-Run
            </h2>
            <p className="text-xl text-gray-700 max-w-6xl mx-auto leading-relaxed">
              We are a non-profit community with one simple goal: to help individuals improve their public speaking skills and empower our members to 
              find their voice. Driven entirely by passionate volunteers, our club is rooted in inclusivity, support, and genuine growth. Whether you're 
              looking to overcome stage fright, become a confident communicator, or inspire those around you, our collaborative environment ensures 
              everyone has a chance to shine and step up as a leader.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* When & Where We Meet */}
            <Card className="bg-gradient-to-br from-cyan-100 to-blue-100 border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  When & Where We Meet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Meeting Times:</h3>
                  <p className="text-gray-700">1st, 3rd, and 5th Sundays of each month from 2:00 pm to 4:00 pm</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Venue:</h3>
                  <p className="text-gray-700">Club Central Hurstville, Meeting Room 2</p>
                  <p className="text-gray-700">2 Croft Avenue, Hurstville NSW 2220</p>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Friendly, welcoming, and diverse community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Encouraging atmosphere for personal and professional growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Opportunities to improve speaking, listening, and leadership skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Constructive feedback from fellow members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Open to all levels—from beginners to experienced speakers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Community Meetings */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-40 h-40 bg-gradient-to-br from-sky-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 -mr-16 -mb-16 w-32 h-32 bg-gradient-to-tl from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Join Our Community Meetings!
            </span>
          </h2>
          <p className="text-xl text-center mb-12 text-white/90 max-w-4xl mx-auto">
            We're entirely run by volunteers, and every member has the opportunity to take on a leadership role and help shape the club.
          </p>

          <Card className="bg-gradient-to-br from-cyan-100 to-blue-100 border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Attending is Easy and Welcoming:
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Be Our Guest – First Three Meetings are Free!</h4>
                  <p className="text-gray-700 ml-4">Check us out with no obligations—just come as you are!</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">No Appointment Needed</h4>
                  <p className="text-gray-700 ml-4">
                    Walk-ins welcome! Prefer to sign up? To receive a copy of the meeting 
                    agenda when you register.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Affordable for All</h4>
                  <p className="text-gray-700 ml-4">After your three free guest visits, attend for less than $10 per meeting.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meeting Gallery */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Our Meetings in Action
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See our vibrant community in action during our regular Sunday meetings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden">
              <div className="relative">
                <img
                  src="/images/IMG-20240818-WA0020.jpg"
                  alt="Hurstville Weekend Toastmasters meeting - members engaged in speaking practice"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Speaking Practice Session</h3>
                <p className="text-gray-600">Members practicing their communication skills in our supportive environment</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden">
              <div className="relative">
                <img
                  src="/images/IMG-20250202-WA0002.jpg"
                  alt="Toastmasters meeting with official banner and engaged audience"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Formal Meeting Structure</h3>
                <p className="text-gray-600">Our organized meetings follow Toastmasters International standards</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden">
              <div className="relative">
                <img
                  src="/images/IMG-20250706-WA0005.jpg"
                  alt="Member delivering a prepared speech to the audience"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Prepared Speeches</h3>
                <p className="text-gray-600">Members deliver prepared speeches as part of their educational journey</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden">
              <div className="relative">
                <img
                  src="/images/IMG-20250706-WA0007.jpg"
                  alt="Interactive meeting with diverse membership and active participation"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community Engagement</h3>
                <p className="text-gray-600">Our diverse and welcoming community actively supports each member's growth</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Experience the energy and supportiveness of our meetings firsthand
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link to="/meetings">Join Our Next Meeting</Link>
            </Button>
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
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Location Info
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
              Join us at Club Central Hurstville for meetings aimed at enhancing 
              your public speaking and leadership skills in a supportive community.
            </p>
          </div>

          <div className="space-y-6 max-w-2xl">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-3">Venue</h3>
                <p className="text-gray-700">Meeting Room, Club Central Hurstville, 2 Crofts Ave, Hurstville</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-3">Schedule</h3>
                <p className="text-gray-700">Every 1st, 3rd and 5th Sunday of the Month from 2pm to 4pm</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-3">Parking</h3>
                <p className="text-gray-700">Free parking available in Club central or at Hurstville Westfields!</p>
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
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Come Join Us!</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Attending is Easy and Welcoming
          </p>
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="space-y-6 text-left">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Be Our Guest – First Three Meetings are Free!</h4>
                  <p className="text-blue-100 ml-4">Check us out with no obligations—just come as you are!</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">No Appointment Needed</h4>
                  <p className="text-blue-100 ml-4">
                    Walk-ins welcome! Prefer to sign up? To receive a copy of the meeting 
                    agenda when you register.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Affordable for All</h4>
                  <p className="text-blue-100 ml-4">After your three free guest visits, attend for less than $10 per meeting.</p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Email us to tell us you will be joining us!
                </h3>
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-4 text-xl font-bold"
                  asChild
                >
                  <Link to="/meetings">Try a Meeting</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
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
                      href="mailto:tm.hurstville@gmail.com"
                      className="text-cyan-300 hover:text-white transition-colors"
                    >
                      tm.hurstville@gmail.com
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
