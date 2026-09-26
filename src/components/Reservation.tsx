import React, { useState } from 'react';
import { restaurantData } from '../data/restaurant';
import { Calendar, Clock, Users, User, Phone, Mail, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface ReservationProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Reservation: React.FC<ReservationProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:00',
    guests: '2',
    specialRequest: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  const content = (
    <div className="max-w-4xl mx-auto px-6 py-16 bg-[#121216] border border-white/10 shadow-2xl relative">
      <div className="text-center max-w-xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-[#d4af37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Table Booking</span>
        </div>
        <h2 className="font-serif text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
          Reserve Your Table
        </h2>
        <p className="text-zinc-400 font-light text-sm">
          Secure your Pan-Asian dining experience at Zen Table, Chattogram.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-12 flex flex-col items-center">
          <CheckCircle2 className="w-16 h-16 text-[#d4af37] mb-4 animate-bounce" />
          <h3 className="font-serif text-2xl font-bold text-white mb-2">Reservation Request Received</h3>
          <p className="text-zinc-300 text-sm max-w-md mx-auto mb-6">
            Thank you, <span className="text-[#d4af37] font-semibold">{formData.name}</span>. We have received your booking request for <span className="text-white font-semibold">{formData.guests} guests</span> on <span className="text-white font-semibold">{formData.date}</span> at <span className="text-white font-semibold">{formData.time}</span>. Our team will contact you shortly to confirm.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setSubmitted(false);
                if (onClose) onClose();
              }}
              className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#d4af37] text-[#0c0c0e] hover:bg-[#c5a028] transition-all"
            >
              Done
            </button>
            <a
              href={restaurantData.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold bg-white/10 text-white hover:bg-white/20 transition-all flex items-center gap-2 border border-white/20"
            >
              <MessageCircle className="w-4 h-4 text-[#d4af37]" />
              <span>Message on Facebook</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  required
                  placeholder="Tanvir Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0c0c0e] border border-white/10 pl-12 pr-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="tel"
                  required
                  placeholder="+880 1854-062222"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0c0c0e] border border-white/10 pl-12 pr-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  placeholder="tanvir@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0c0c0e] border border-white/10 pl-12 pr-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                Date of Reservation *
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#0c0c0e] border border-white/10 pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                Time *
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-[#0c0c0e] border border-white/10 pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                >
                  <option value="12:00">12:00 PM (Lunch)</option>
                  <option value="13:00">01:00 PM (Lunch)</option>
                  <option value="14:00">02:00 PM (Lunch)</option>
                  <option value="18:00">06:00 PM (Dinner)</option>
                  <option value="19:00">07:00 PM (Dinner)</option>
                  <option value="20:00">08:00 PM (Dinner)</option>
                  <option value="21:00">09:00 PM (Dinner)</option>
                  <option value="22:00">10:00 PM (Late Dinner)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
                Number of Guests *
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full bg-[#0c0c0e] border border-white/10 pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Guests (Couple)</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests (Family)</option>
                  <option value="8">8+ Guests (Group)</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-2 font-medium">
              Special Requests or Dietary Preferences
            </label>
            <textarea
              rows={3}
              placeholder="Anniversary celebration, window seating, allergies..."
              value={formData.specialRequest}
              onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
              className="w-full bg-[#0c0c0e] border border-white/10 p-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <a
                href={`tel:${restaurantData.phone}`}
                className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call to Reserve</span>
              </a>
              <a
                href={restaurantData.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Facebook Messenger</span>
              </a>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-[#d4af37] hover:bg-[#c5a028] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Request Reservation</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
        <div className="relative w-full max-w-3xl">
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white z-50 bg-black/50 p-2 border border-white/10"
            >
              ✕
            </button>
          )}
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="reservation" className="py-24 bg-[#0c0c0e] relative overflow-hidden">
      {content}
    </section>
  );
};
