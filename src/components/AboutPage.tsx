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
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Heart, 
  Award, 
  Mic, 
  Target,
  Globe,
  BookOpen,
  Briefcase
} from "lucide-react";

const AboutPage = () => {
  const whoComesToClub = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "English as Second Language Speakers",
      description: "Those who speak English as a second language and want to practice their English fluency. They achieve this goal very quickly and soon start to challenge themselves with different arts of public speaking."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Creative Writers",
      description: "Those interested in creative writing who would like to express their writing publicly in a friendly environment."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Professionals",
      description: "Professionals who want to master the art of speaking and leadership in a friendly environment."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Story Enthusiasts",
      description: "Those who want to be inspired by personal stories, tickle themselves with laughter with funny stories and speeches."
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
            About <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Hurstville Weekend</span> Toastmasters
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto">
            The Shaolin temple of public speaking and leadership development!
          </p>
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-2xl mb-8 inline-block shadow-xl">
            <p className="font-bold text-lg">CHANGING LIVES - ONE SPEECH AT A TIME! FOR 30 YEARS!!</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Our Story
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    From the flowing waterfalls of the Blue mountains down to the bustling city of Hurstville center, tucked away near minutes from the train station and Westfield shopping center, amid the asian groceries and delicious rice, noodle and hotpot houses there is a little club housed in Club Central called <strong>Hurstville Weekend Toastmasters</strong>.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We are not just a public speaking club. <strong>We are the Shaolin temple of public speaking and leadership development!</strong>
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We meet every fortnight, every 1st, 3rd and 5th Sundays of the month to practice the art of public speaking. This means we practice the art of story telling, art of improvisation and persuasion and the art of speaking your heart.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-3">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    30 Years of Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    For three decades, we've been transforming lives through the power of communication and leadership development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    Non-Profit Organization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    We are a non-profit organisation committed to helping our community develop essential communication skills.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    Diverse Community
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    We are an international community of people who wish to give back to the community through speaking and positive reinforcement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who Comes to Our Club */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Who Comes to Our Club?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              People who want to conquer their fears and achieve success together in a friendly group environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoComesToClub.map((item, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent flex items-center gap-3">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Reality Check Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              The Reality Check
            </h2>
          </div>

          <Card className="bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 p-4 rounded-full">
                  <Mic className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-8">
                NO KIDDING! There's a group of people getting together every fortnight to learn this craft!
              </h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-xl leading-relaxed mb-6">
                  Imagine, you are at work and your boss suddenly asks you to express your ideas and thoughts. What do you do? <strong>Stutter through it?</strong>
                </p>
                <p className="text-xl leading-relaxed">
                  Or will you fend him off with the <strong>Art of Improvisation</strong> (through table topics) and <strong>CONFIDENTLY</strong> deliver an off the cuff mini speech in reply to his question. <strong>WOOOAH!!</strong> as Bruce Lee will say with perfect vocal variety!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-4 text-xl font-bold"
                  asChild
                >
                  <Link to="/join">Join Our Community</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-2 border-white/50 text-white hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-4 text-xl font-bold"
                  asChild
                >
                  <a href="tel:0414889018">Call Quang - 0414 889 018</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Where Are We Located?
              </span>
            </h2>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg mb-6 leading-relaxed">
                    We have now moved to a bigger venue at <strong>Club Central!</strong> This means we have a bigger room to seat more like minded people. We get a lots of visitors every meeting and those who have became members are on their way to mastering the art of competent communicating and leadership and becoming mentors to new members and thus... future leaders to the community and the world.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 mt-1 text-sky-300" />
                      <div>
                        <p className="font-semibold">Meeting Room, Club Central Hurstville</p>
                        <p className="text-blue-200">2 Crofts Ave, Hurstville NSW 2220</p>
                        <p className="text-sm text-sky-300">(Downstairs opposite Ozeki Sushi)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 mt-1 text-blue-300" />
                      <div>
                        <p className="font-semibold">Every Sunday 2:00 PM - 4:00 PM</p>
                        <p className="text-blue-200">1st, 3rd, and 5th Sundays of each month</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-center">Important Note</h3>
                  <p className="mb-4 text-center">
                    Please remember to <strong>sign in at the club reception</strong> before coming downstairs to our meeting as Club Central is kind of like a 'RSL' club and they need to take records of all their visitors.
                  </p>
                  <p className="text-center text-sky-300">
                    🚗 Free parking available in Club central or Westfields!<br/>
                    🚊 Near Hurstville train station
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
              Questions? Get In Touch!
            </span>
          </h2>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
            <CardContent className="p-8 text-center">
              <p className="text-xl mb-6">
                I'm lost or I need to ask more questions!
              </p>
              <p className="text-lg mb-8 text-blue-200">
                Call Quang - I may buy you a coffee if you come! But no promises!
              </p>
              
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-10 py-4 text-xl font-bold"
                  asChild
                >
                  <a href="tel:0414889018">Call Quang - 0414 889 018</a>
                </Button>
                
                <p className="text-sm text-gray-400">
                  If it's too hard to follow the directions, just give me a call and I'll sign you in!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 