import {
  Music,
  Heart,
  PlayCircle,
  GraduationCap,
  Church,
  MapPin,
  HeartHandshake,
  Home,
  HandHeart,
  Megaphone,
  Clapperboard,
  Handshake,
  Hammer,
  Briefcase,
  ShieldCheck,
} from 'lucide-react';
import { getLocalMinistryImages } from './ministryAssets';

const CHURCH_PHONE = '024 595 3629';

const BASE_MINISTRIES = [
  {
    id: 'worship',
    name: 'Music Team',
    icon: Music,
    color: 'from-blue-500 to-cyan-500',
    description: "Leading the congregation into God's presence through music",
    about:
      'The Music Team leads the congregation in song during services, helping us praise God together. They prepare before gatherings and support worship on Sundays and other church meetings.',
    meetings: [
      {
        day: 'Sunday',
        time: '6:00 AM - 7:00 AM',
        location: 'Main Sanctuary',
      },
      {
        day: 'Thursday',
        time: '6:00 PM - 8:00 PM',
        location: 'Choir Room',
      },
    ],
    leader: 'Mr Rexford Sackey',
    phone: CHURCH_PHONE,
  },
  {
    id: 'children',
    name: "Children's Ministry",
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    description: 'Nurturing young hearts for Christ',
    about:
      "Children's Ministry walks with parents to teach children the Word of God in a way they can understand. During Sunday service, children are cared for and taught in their own space so they can grow in faith from an early age.",
    meetings: [
      {
        day: 'Sunday',
        time: '8:00 AM - 10:30 AM',
        location: "Children's Wing",
      },
    ],
    leader: 'Deaconess Wilhemina Tete-Mensah',
    phone: CHURCH_PHONE,
  },
  {
    id: 'media',
    name: 'Media & Tech',
    icon: PlayCircle,
    color: 'from-purple-500 to-indigo-500',
    description: 'Spreading the gospel through technology',
    about:
      'Media & Tech supports services with sound, visuals, and live streaming so people in the auditorium and online can take part. The team also helps record and share church messages.',
    meetings: [
      {
        day: 'Sunday',
        time: '6:00 AM - 2:00 PM',
        location: 'Media Room',
      },
      {
        day: 'Wednesday',
        time: '5:00 PM - 9:00 PM',
        location: 'Media Room',
      },
      {
        day: 'Saturday',
        time: '10:00 AM - 12:00 PM',
        location: 'Training Session',
      },
    ],
    leader: 'Bro. Kwame Boateng',
    phone: CHURCH_PHONE,
  },
  {
    id: 'youth',
    name: 'New Breed',
    icon: GraduationCap,
    color: 'from-indigo-500 to-blue-500',
    description: 'Empowering the next generation',
    about:
      'New Breed is the youth ministry of the church. It helps young people grow in faith, build friendship, and find ways to serve in the house of God.',
    meetings: [
      {
        day: 'Sunday',
        time: '10:30 AM - 1:00 PM',
        location: 'Youth Center',
      },
      {
        day: 'Friday',
        time: '6:00 PM - 8:00 PM',
        location: 'Youth Center',
      },
    ],
    leader: 'Deacon Cyril Mawuli Honu-Mensah',
    phone: CHURCH_PHONE,
  },
  {
    id: 'men',
    name: 'Mighty Men of Valor',
    icon: Church,
    color: 'from-emerald-500 to-green-500',
    description: 'Building strong men of God',
    about:
      "Mighty Men of Valor is the men's ministry of the church. The men gather to grow in faith, encourage one another, and learn how to lead well at home and in the church.",
    meetings: [
      {
        day: '1st Saturday',
        time: '7:00 AM - 9:00 AM',
        location: 'Main Hall',
      },
      {
        day: '3rd Saturday',
        time: '7:00 AM - 9:00 AM',
        location: 'Main Hall',
      },
    ],
    leader: 'Mr Frederick Essel',
    phone: CHURCH_PHONE,
  },
  {
    id: 'women',
    name: 'Precious Vessels of Virtue',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    description: 'Empowering women in faith',
    about:
      "Precious Vessels of Virtue is the women's ministry of the church. The women gather for fellowship, teaching, and service, and support one another in faith and family life.",
    meetings: [
      {
        day: '2nd Saturday',
        time: '9:00 AM - 11:00 AM',
        location: 'Fellowship Hall',
      },
      {
        day: '4th Saturday',
        time: '9:00 AM - 11:00 AM',
        location: 'Fellowship Hall',
      },
    ],
    leader: 'Lady Martha Obeng',
    phone: CHURCH_PHONE,
  },
  {
    id: 'outreach',
    name: 'Outreach and Follow up',
    icon: MapPin,
    color: 'from-teal-500 to-cyan-500',
    description: 'Reaching our community for Christ',
    about:
      'Outreach and Follow up visits the community and stays in touch with first-time guests and new members. The team helps people feel welcome and connected after they visit the church.',
    meetings: [
      {
        day: 'Saturday',
        time: '2:00 PM - 5:00 PM',
        location: 'Community Center',
      },
      {
        day: 'Last Sunday',
        time: '2:00 PM - 5:00 PM',
        location: 'Various Locations',
      },
    ],
    leader: 'Deacon Cyril Mawuli Honu-Mensah',
    phone: CHURCH_PHONE,
  },
  {
    id: 'welfare',
    name: 'Welfare',
    icon: HeartHandshake,
    color: 'from-amber-500 to-orange-500',
    description: 'Caring for members in times of need',
    about:
      'Welfare looks after members who need care, support, or practical help. The team walks with families during difficult seasons so no one in the church stands alone.',
    meetings: [],
    leader: 'Deaconess Wilhemina Tete-Mensah',
    phone: CHURCH_PHONE,
  },
  {
    id: 'family-life',
    name: 'Family Life Enrichment',
    icon: Home,
    color: 'from-sky-500 to-blue-500',
    description: 'Strengthening families in the church',
    about:
      'Family Life Enrichment helps families in the church grow stronger in faith and in the home. It offers teaching and support for marriage, parenting, and healthy family life.',
    meetings: [],
    leader: 'Deaconess Wilhemina Tete-Mensah',
    phone: CHURCH_PHONE,
  },
  {
    id: 'intercessory',
    name: 'Intercessory',
    icon: HandHeart,
    color: 'from-violet-500 to-purple-500',
    description: 'Standing in prayer for the church',
    about:
      'Intercessory leads the church in prayer for members, leaders, and the work of the ministry. The team stands in the gap so the church is covered in prayer through the week.',
    meetings: [],
    leader: 'Deaconess Wilhemina Tete-Mensah',
    phone: CHURCH_PHONE,
  },
  {
    id: 'events',
    name: 'Events and Publicity',
    icon: Megaphone,
    color: 'from-orange-500 to-red-500',
    description: 'Coordinating church events and publicity',
    about:
      'Events and Publicity plans church programmes and helps people know what is happening. The team handles announcements, invitations, and the running of special gatherings.',
    meetings: [],
    leader: 'Deacon Cyril Mawuli Honu-Mensah',
    phone: CHURCH_PHONE,
  },
  {
    id: 'music-media',
    name: 'Music and Media',
    icon: Clapperboard,
    color: 'from-blue-600 to-indigo-600',
    description: 'Serving through music and media',
    about:
      'Music and Media oversees worship, sound, and media for church gatherings. The team works with the Music Team and Media & Tech so services are heard and seen clearly.',
    meetings: [],
    leader: 'Deacon Cyril Mawuli Honu-Mensah',
    phone: CHURCH_PHONE,
  },
  {
    id: 'ushering',
    name: 'Ushering & Protocol',
    icon: Handshake,
    color: 'from-emerald-600 to-teal-600',
    description: 'Welcoming and hosting guests',
    about:
      'Ushering & Protocol welcomes guests, seats the congregation, and helps services run smoothly. The team is often the first smile people see when they arrive.',
    meetings: [],
    leader: 'Deacon Seth Tetteh',
    phone: CHURCH_PHONE,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: Hammer,
    color: 'from-stone-500 to-neutral-600',
    description: 'Supporting church building and projects',
    about:
      'Projects supports building work and other church development assignments. The team helps plan and carry out work that keeps the church facilities in good shape.',
    meetings: [],
    leader: 'Deacon Seth Tetteh',
    phone: CHURCH_PHONE,
  },
  {
    id: 'administration',
    name: 'Administration',
    icon: Briefcase,
    color: 'from-slate-500 to-slate-700',
    description: 'Church administration and operations',
    about:
      'Administration handles the day-to-day running of the church office and records. The team supports the pastors and other ministries with letters, files, and coordination.',
    meetings: [],
    leader: 'Deacon Seth Tetteh',
    phone: CHURCH_PHONE,
  },
  {
    id: 'traffic-security',
    name: 'Traffic and Security',
    icon: ShieldCheck,
    color: 'from-zinc-600 to-slate-800',
    description: 'Keeping the grounds safe and orderly',
    about:
      'Traffic and Security keeps the compound safe and helps members and visitors move in and out with order. The team watches over parking, entry points, and the grounds during services.',
    meetings: [],
    leader: 'Deacon Seth Tetteh',
    phone: CHURCH_PHONE,
  },
];

export const MINISTRIES_DATA = BASE_MINISTRIES.map(ministry => {
  const local = getLocalMinistryImages(ministry.id);

  return {
    ...ministry,
    headerImage: local?.headerImage || local?.gallery[0] || '',
    gallery: local?.gallery ?? [],
  };
});
