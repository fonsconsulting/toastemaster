import React from "react";
import { Link } from "react-router-dom";
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
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Mic, 
  Award,
  CheckCircle,
  Phone,
  Info,
  Star
} from "lucide-react";

const MeetingsPage = () => {
  // Generate upcoming meetings based on 1st, 3rd, and 5th Sundays
  const getUpcomingMeetings = () => {
    const now = new Date();
    const meetings = [];
    
    for (let month = 0; month < 4; month++) {
      const currentMonth = new Date(now.getFullYear(), now.getMonth() + month, 1);
      const firstSunday = new Date(currentMonth);
      firstSunday.setDate(1 + (7 - firstSunday.getDay()) % 7);
      
      // 1st Sunday
      if (firstSunday >= now) {
        meetings.push({
          id: `${currentMonth.getMonth()}-1`,
          title: "Regular Meeting",
          type: "1st Sunday",
          date: firstSunday.toLocaleDateString('en-AU', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          time: "2:00 PM - 4:00 PM",
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
          type: "3rd Sunday",
          date: thirdSunday.toLocaleDateString('en-AU', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          time: "2:00 PM - 4:00 PM",
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
          type: "5th Sunday",
          date: fifthSunday.toLocaleDateString('en-AU', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          time: "2:00 PM - 4:00 PM",
          description: "Special meeting day - perfect opportunity for new members and guests to join us!",
        });
      }
    }
    
    return meetings.slice(0, 6); // Return next 6 meetings
  };

  const upcomingMeetings = getUpcomingMeetings();

  const meetingProgram = [
    {
      time: "2:00 PM",
      activity: "Welcome & Introductions",
      description: "Warm welcome for all members and guests"
    },
    {
      time: "2:10 PM",
      activity: "Table Topics Session",
      description: "Impromptu speaking practice on various topics"
    },
    {
      time: "2:30 PM",
      activity: "Prepared Speeches",
      description: "Members deliver prepared speeches from their educational pathways"
    },
    {
      time: "3:15 PM",
      activity: "Speech Evaluations",
      description: "Constructive feedback to help speakers improve"
    },
    {
      time: "3:45 PM",
      activity: "Reports & Awards",
      description: "General business and recognition of achievements"
    },
    {
      time: "4:00 PM",
      activity: "Networking & Social Time",
      description: "Connect with fellow members and guests"
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
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Meetings</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto">
            Join us every fortnight for an inspiring journey in communication and leadership development
          </p>
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-2xl mb-8 inline-block shadow-xl">
            <p className="font-bold text-lg">Sundays 2-4pm • 1st, 3rd & 5th Sundays</p>
          </div>
        </div>
      </section>

      {/* Meeting Schedule Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Meeting Schedule
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We meet every fortnight on the 1st, 3rd, and 5th Sundays of each month from 2:00 PM to 4:00 PM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMeetings.map((meeting) => (
              <Card
                key={meeting.id}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-gradient-to-r from-sky-100 to-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {meeting.type}
                    </span>
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {meeting.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-gray-700">
                    {meeting.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl">
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{meeting.time}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{meeting.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Program Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Typical Meeting Program
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Each meeting follows a structured format designed to maximize learning and growth opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {meetingProgram.slice(0, 3).map((item, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-sky-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold min-w-fit">
                        {item.time}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.activity}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="space-y-6">
              {meetingProgram.slice(3).map((item, index) => (
                <Card key={index + 3} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold min-w-fit">
                        {item.time}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.activity}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Visitor Information */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Visitor Information
            </h2>
            <p className="text-xl text-gray-700">
              Planning to visit? Here's everything you need to know!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  Location & Directions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-6 rounded-2xl border border-sky-100">
                  <h3 className="font-semibold text-gray-800 mb-2">Meeting Room, Club Central Hurstville</h3>
                  <p className="text-gray-700 mb-1">2 Crofts Ave, Hurstville NSW 2220</p>
                  <p className="text-sm text-blue-600 font-medium">(Downstairs opposite Ozeki Sushi)</p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 mt-1 text-orange-600" />
                    <div>
                      <h3 className="font-semibold text-orange-700 mb-2">Important:</h3>
                      <p className="text-sm text-gray-700">
                        Please sign in at Club Central reception before going downstairs to our meeting room. 
                        Club Central requires visitor registration for all guests.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Getting There:</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>🚗 Free parking at Club Central or Westfield Hurstville</p>
                    <p>🚊 Walking distance from Hurstville train station</p>
                    <p>🛒 Near Westfield shopping center and Asian groceries</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  First Time Visitors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                  <h3 className="font-semibold text-green-700 mb-3">Welcome!</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>No preparation needed - just come along!</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Visitors are always welcome</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Meet like-minded people in a friendly environment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>See what we're all about firsthand</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Before You Visit:</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    We recommend contacting Quang before your first visit. He's our friendly contact person 
                    who can answer questions and even help with directions!
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    asChild
                  >
                    <a href="tel:0414889018">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Quang - 0414 889 018
                    </a>
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 italic">
                    "I may buy you a coffee if you come! But no promises!" - Quang
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Ready to Join Us?
            </span>
          </h2>
          
          <p className="text-xl mb-12 opacity-90">
            Take the first step toward improving your communication and leadership skills
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-4 text-xl font-bold"
              asChild
            >
              <Link to="/join">Express Interest</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-2 border-sky-200/50 hover:border-blue-200/70 text-white hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-4 text-xl font-bold"
              asChild
            >
              <a href="tel:0414889018">Call Quang - 0414 889 018</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetingsPage; 