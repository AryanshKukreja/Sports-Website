import React, { useState, useEffect } from 'react';
import {MapPin, ChevronLeft, ChevronRight, Clock, Filter, Search } from 'lucide-react';
import './events.css'; // Import the CSS file

// Extended sample event data with more variety and random dates
const sampleEvents = [
  {
    id: 1,
    title: "Annual Basketball Tournament",
    date: "2025-05-26",
    time: "09:00",
    sport: "Basketball",
    description: "Annual inter-college basketball championship",
    location: "Main Sports Hall"
  },
  {
    id: 2,
    title: "Swimming Meet",
    date: "2025-05-27",
    time: "14:00",
    sport: "Swimming",
    description: "Regional swimming competition",
    location: "Aquatics Center"
  },
  {
    id: 3,
    title: "Sports Council General Meeting",
    date: "2025-05-28",
    time: "16:00",
    sport: "Council",
    description: "Quarterly meeting for all sports representatives",
    location: "Conference Room B"
  },
  {
    id: 4,
    title: "Football Tryouts",
    date: "2025-05-29",
    time: "08:00",
    sport: "Football",
    description: "Team selection for the upcoming season",
    location: "Main Field"
  },
  {
    id: 5,
    title: "Tennis Tournament Finals",
    date: "2025-05-30",
    time: "10:00",
    sport: "Tennis",
    description: "Singles and doubles tournament finals",
    location: "Tennis Courts"
  },
  {
    id: 6,
    title: "Volleyball Practice",
    date: "2025-05-26",
    time: "18:00",
    sport: "Volleyball",
    description: "Weekly team practice session",
    location: "Indoor Court"
  },
  {
    id: 7,
    title: "Cricket Championship Semi-Final",
    date: "2025-06-02",
    time: "11:00",
    sport: "Cricket",
    description: "Semi-final match of annual tournament",
    location: "Cricket Ground"
  },
  {
    id: 8,
    title: "Badminton Club Meeting",
    date: "2025-06-03",
    time: "17:00",
    sport: "Badminton",
    description: "Monthly club meeting and practice",
    location: "Badminton Hall"
  },
  {
    id: 9,
    title: "Table Tennis Workshop",
    date: "2025-06-04",
    time: "15:00",
    sport: "Table Tennis",
    description: "Skills development workshop for beginners",
    location: "Recreation Center"
  },
  {
    id: 10,
    title: "Athletics Training",
    date: "2025-06-05",
    time: "07:00",
    sport: "Athletics",
    description: "Morning track and field training session",
    location: "Athletics Stadium"
  },
  {
    id: 11,
    title: "Boxing Championship Qualifier",
    date: "2025-06-06",
    time: "19:00",
    sport: "Boxing",
    description: "Qualifying rounds for championship",
    location: "Boxing Arena"
  },
  {
    id: 12,
    title: "Gymnastics Exhibition",
    date: "2025-06-07",
    time: "13:00",
    sport: "Gymnastics",
    description: "Student showcase and performance",
    location: "Gymnastics Hall"
  },
  {
    id: 13,
    title: "Wrestling Tournament",
    date: "2025-06-09",
    time: "12:00",
    sport: "Wrestling",
    description: "Inter-college wrestling championship",
    location: "Wrestling Arena"
  },
  {
    id: 14,
    title: "Archery Competition",
    date: "2025-06-10",
    time: "09:30",
    sport: "Archery",
    description: "Precision shooting competition",
    location: "Archery Range"
  },
  {
    id: 15,
    title: "Hockey League Match",
    date: "2025-06-11",
    time: "16:30",
    sport: "Hockey",
    description: "Regular season league match",
    location: "Hockey Field"
  },
  {
    id: 16,
    title: "Sports Medicine Seminar",
    date: "2025-06-12",
    time: "14:30",
    sport: "Council",
    description: "Health and fitness awareness session",
    location: "Medical Center"
  },
  {
    id: 17,
    title: "Swimming Training Camp",
    date: "2025-06-13",
    time: "06:00",
    sport: "Swimming",
    description: "Intensive training for competitive swimmers",
    location: "Aquatics Center"
  },
  {
    id: 18,
    title: "Basketball Skills Clinic",
    date: "2025-06-14",
    time: "10:30",
    sport: "Basketball",
    description: "Fundamental skills development session",
    location: "Practice Court"
  },
  {
    id: 19,
    title: "Football Friendly Match",
    date: "2025-06-16",
    time: "17:00",
    sport: "Football",
    description: "Exhibition match with visiting team",
    location: "Main Field"
  },
  {
    id: 20,
    title: "Tennis Coaching Session",
    date: "2025-06-17",
    time: "08:30",
    sport: "Tennis",
    description: "Professional coaching for advanced players",
    location: "Tennis Courts"
  },
  {
    id: 21,
    title: "Badminton Tournament Quarter Finals",
    date: "2025-06-18",
    time: "15:00",
    sport: "Badminton",
    description: "Quarter final matches for tournament",
    location: "Badminton Hall"
  },
  {
    id: 22,
    title: "Table Tennis League",
    date: "2025-06-19",
    time: "17:30",
    sport: "Table Tennis",
    description: "Weekly league matches",
    location: "Recreation Center"
  },
  {
    id: 23,
    title: "Athletics Track Meet",
    date: "2025-06-20",
    time: "08:00",
    sport: "Athletics",
    description: "Sprint and distance events",
    location: "Athletics Stadium"
  },
  {
    id: 24,
    title: "Boxing Training Session",
    date: "2025-06-21",
    time: "18:00",
    sport: "Boxing",
    description: "Technical skills training",
    location: "Boxing Arena"
  },
  {
    id: 25,
    title: "Gymnastics Team Practice",
    date: "2025-06-23",
    time: "16:00",
    sport: "Gymnastics",
    description: "Team coordination and routine practice",
    location: "Gymnastics Hall"
  },
  {
    id: 26,
    title: "Wrestling Workshop",
    date: "2025-06-24",
    time: "14:00",
    sport: "Wrestling",
    description: "Techniques and conditioning workshop",
    location: "Wrestling Arena"
  },
  {
    id: 27,
    title: "Archery Practice",
    date: "2025-06-25",
    time: "10:00",
    sport: "Archery",
    description: "Target practice and form improvement",
    location: "Archery Range"
  },
  {
    id: 28,
    title: "Hockey Skills Development",
    date: "2025-06-26",
    time: "16:00",
    sport: "Hockey",
    description: "Stick handling and shooting practice",
    location: "Hockey Field"
  },
  {
    id: 29,
    title: "Sports Council Awards Ceremony",
    date: "2025-06-27",
    time: "19:00",
    sport: "Council",
    description: "Annual recognition ceremony",
    location: "Main Auditorium"
  },
  {
    id: 30,
    title: "Volleyball Championship Finals",
    date: "2025-06-28",
    time: "13:00",
    sport: "Volleyball",
    description: "Championship final match",
    location: "Indoor Court"
  }
];

// Full list of sports
const allSports = [
  "Basketball", "Swimming", "Football", "Tennis", "Cricket", 
  "Volleyball", "Hockey", "Badminton", "Table Tennis", 
  "Athletics", "Boxing", "Gymnastics", "Wrestling", "Archery", "Council"
];

const sportColors = {
  "Basketball": "#f97316",
  "Swimming": "#06b6d4",
  "Football": "#22c55e",
  "Tennis": "#eab308",
  "Cricket": "#84cc16",
  "Volleyball": "#f59e0b",
  "Hockey": "#8b5cf6",
  "Badminton": "#ec4899",
  "Table Tennis": "#ef4444",
  "Athletics": "#10b981",
  "Boxing": "#dc2626",
  "Gymnastics": "#d946ef",
  "Wrestling": "#7c3aed",
  "Archery": "#059669",
  "Council": "#6366f1"
};

export default function SportsCalendar() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedSport, setSelectedSport] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  // Simulating data fetch
  useEffect(() => {
    setEvents(sampleEvents);
    setFilteredEvents(sampleEvents);
  }, []);

  // Get start of week (Sunday)
  const getWeekStart = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day;
    return new Date(d.setDate(diff));
  };

  // Initialize current week start
  useEffect(() => {
    setCurrentWeekStart(getWeekStart(new Date()));
  }, []);

  // Filter events based on selected sport and search term
  useEffect(() => {
    let result = [...events];
    
    if (selectedSport !== "All") {
      result = result.filter(event => event.sport === selectedSport);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(event => 
        event.title.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term)
      );
    }
    
    setFilteredEvents(result);
  }, [selectedSport, searchTerm, events]);

  // Get events for current week
  const getWeekEvents = () => {
    const weekStart = new Date(currentWeekStart);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= weekStart && eventDate <= weekEnd;
    });
  };

  // Generate week days
  const getWeekDays = () => {
    const days = [];
    const weekStart = new Date(currentWeekStart);
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      days.push(day);
    }
    
    return days;
  };

  // Get events for specific day
  const getDayEvents = (date) => {
    const dateString = date.toISOString().split('T')[0];
    return getWeekEvents().filter(event => event.date === dateString)
      .sort((a, b) => a.time.localeCompare(b.time));
  };

  // Navigate weeks
  const goToPreviousWeek = () => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(newWeekStart);
  };

  const goToNextWeek = () => {
    const newWeekStart = new Date(currentWeekStart);
    newWeekStart.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(newWeekStart);
  };

  const goToToday = () => {
    setCurrentWeekStart(getWeekStart(new Date()));
  };

  // Format date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (time) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekDays = getWeekDays();
  const weekEvents = getWeekEvents();

  return (
    <div className="sports-calendar-container">
      <div className="sports-calendar-wrapper">
        {/* Header */}
        <div className="sports-calendar-header">
          <h1 className="sports-calendar-title">Sports Council Calendar</h1>
          <p className="sports-calendar-subtitle">Stay updated with all sporting events and activities</p>
        </div>
        
        {/* Filters */}
        <div className="sports-filters-section">
          <div className="sports-filters-container">
            <div className="sports-filter-group">
              <div className="sports-filter-item">
                <label className="sports-filter-label">
                  <Filter size={16} />
                  Filter by Sport
                </label>
                <select
                  className="sports-filter-select"
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                >
                  <option value="All">All Sports</option>
                  {allSports.map((sport) => (
                    <option key={sport} value={sport}>
                      {sport}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="sports-filter-item">
                <label className="sports-filter-label">
                  <Search size={16} />
                  Search Events
                </label>
                <input
                  type="text"
                  placeholder="Search events..."
                  className="sports-search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="sports-events-summary">
              <span className="sports-events-count">{weekEvents.length}</span>
              <span className="sports-events-text">events this week</span>
            </div>
          </div>
        </div>

        {/* Calendar Navigation */}
        <div className="sports-calendar-nav">
          <div className="sports-nav-controls">
            <button onClick={goToPreviousWeek} className="sports-nav-button">
              <ChevronLeft size={18} />
              Previous Week
            </button>
            
            <button onClick={goToToday} className="sports-today-button">
              Today
            </button>
            
            <button onClick={goToNextWeek} className="sports-nav-button">
              Next Week
              <ChevronRight size={18} />
            </button>
          </div>
          
          <div className="sports-week-range">
            {formatDate(weekDays[0])} - {formatDate(weekDays[6])}, {weekDays[0].getFullYear()}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="sports-calendar-grid">
          {weekDays.map((day, index) => {
            const dayEvents = getDayEvents(day);
            const isToday = day.toDateString() === new Date().toDateString();
            
            return (
              <div key={index} className={`sports-day-column ${isToday ? 'sports-today' : ''}`}>
                <div className="sports-day-header">
                  <div className="sports-day-name">{dayNames[index]}</div>
                  <div className={`sports-day-number ${isToday ? 'sports-today-number' : ''}`}>
                    {day.getDate()}
                  </div>
                </div>
                
                <div className="sports-day-events">
                  {dayEvents.length === 0 ? (
                    <div className="sports-no-events-day">No events</div>
                  ) : (
                    dayEvents.map(event => (
                      <div 
                        key={event.id} 
                        className="sports-event-card"
                        style={{ borderLeftColor: sportColors[event.sport] }}
                      >
                        <div className="sports-event-time">
                          <Clock size={12} />
                          {formatTime(event.time)}
                        </div>
                        <div className="sports-event-title">{event.title}</div>
                        <div className="sports-event-details">
                          <div className="sports-event-location">
                            <MapPin size={12} />
                            {event.location}
                          </div>
                          <div 
                            className="sports-event-sport-badge"
                            style={{ 
                              backgroundColor: `${sportColors[event.sport]}20`,
                              color: sportColors[event.sport]
                            }}
                          >
                            {event.sport}
                          </div>
                        </div>
                        <div className="sports-event-description">
                          {event.description}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="sports-legend">
          <div className="sports-legend-title">Sport Categories</div>
         <div className="sports-legend-items">
          {allSports.map(sport => (
          <div key={sport} className="sports-legend-item">
        <div 
          className="sports-legend-color"
          style={{ backgroundColor: sportColors[sport] }}
        ></div>
        <span style={{ color: 'black' }}>{sport}</span>
      </div>
   ))}
        </div>

        </div>
      </div>
    </div>
  );
}