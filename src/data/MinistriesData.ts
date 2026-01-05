import { Music, Heart, PlayCircle, Users, GraduationCap, Church, MapPin } from "lucide-react";

export const MINISTRIES_DATA = [
  {
    id: 'worship',
    name: 'Worship Team',
    icon: Music,
    color: 'from-blue-500 to-cyan-500',
    description: "Leading the congregation into God's presence through music",
    headerImage:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1920',
    vision:
      'To create an atmosphere where believers can connect with God through spirit-filled worship and praise. We are committed to excellence in musical ministry and developing gifted musicians.',
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
    gallery: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=600',
    ],
    leader: 'Bro. Emmanuel Mensah',
    contact: 'worship@icgclwt.org',
  },
  {
    id: 'children',
    name: "Children's Ministry",
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    description: 'Nurturing young hearts for Christ',
    headerImage:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1920',
    vision:
      'To partner with parents in raising children who love God, know His Word, and live out their faith. We provide age-appropriate, engaging biblical teaching that sets a strong foundation.',
    meetings: [
      {
        day: 'Sunday',
        time: '7:30 AM - 10:00 AM',
        location: "Children's Wing",
      },
      {
        day: 'Sunday',
        time: '10:30 AM - 1:00 PM',
        location: "Children's Wing",
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1587616211892-533b89e2f617?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1612731486606-2614b4d74921?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1560251485-97bc9fa9fa0e?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600',
    ],
    leader: 'Sis. Grace Asante',
    contact: 'children@icgclwt.org',
  },
  {
    id: 'media',
    name: 'Media & Tech',
    icon: PlayCircle,
    color: 'from-purple-500 to-indigo-500',
    description: 'Spreading the gospel through technology',
    headerImage:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1920',
    vision:
      'To leverage modern technology for kingdom expansion by providing excellent audio-visual production, live streaming, and digital content that reaches both our local congregation and the global community.',
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
    gallery: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?auto=format&fit=crop&q=80&w=600',
    ],
    leader: 'Bro. Kwame Boateng',
    contact: 'media@icgclwt.org',
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: Users,
    color: 'from-orange-500 to-amber-500',
    description: 'Creating a welcoming atmosphere for all',
    headerImage:
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1920',
    vision:
      'To embody the love of Christ through warm hospitality, ensuring every person who walks through our doors feels welcomed, valued, and cared for as part of the church family.',
    meetings: [
      {
        day: 'Sunday',
        time: '6:30 AM - 2:00 PM',
        location: 'Welcome Desk',
      },
      {
        day: '1st Saturday',
        time: '10:00 AM - 12:00 PM',
        location: 'Fellowship Hall',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=600',
    ],
    leader: 'Sis. Abena Osei',
    contact: 'hospitality@icgclwt.org',
  },
  {
    id: 'youth',
    name: 'Youth & Teens',
    icon: GraduationCap,
    color: 'from-indigo-500 to-blue-500',
    description: 'Empowering the next generation',
    headerImage:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1920',
    vision:
      'To raise up a generation of young people who are passionate about God, grounded in His Word, and equipped to be influencers in their schools, communities, and beyond.',
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
    gallery: [
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1525026198548-4baa812f1183?auto=format&fit=crop&q=80&w=600',
    ],
    leader: 'Pastor Daniel Owusu',
    contact: 'youth@icgclwt.org',
  },
  {
    id: 'men',
    name: 'Men of Valor',
    icon: Church,
    color: 'from-emerald-500 to-green-500',
    description: 'Building strong men of God',
    headerImage:
      'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1920',
    vision:
      'To develop men of integrity, character, and spiritual strength who lead their families well and impact their communities for Christ.',
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
    gallery: [
      'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=600',
    ],
    leader: 'Elder Joseph Antwi',
    contact: 'men@icgclwt.org',
  },
  {
    id: 'women',
    name: 'Women of Grace',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    description: 'Empowering women in faith',
    headerImage:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920',
    vision:
      "To empower women to discover and fulfill their God-given purpose through fellowship, discipleship, and service, creating a sisterhood that reflects Christ's love.",
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
    gallery: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
    ],
    leader: 'Sis. Akosua Adjei',
    contact: 'women@icgclwt.org',
  },
  {
    id: 'outreach',
    name: 'Outreach',
    icon: MapPin,
    color: 'from-teal-500 to-cyan-500',
    description: 'Reaching our community for Christ',
    headerImage:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1920',
    vision:
      'To demonstrate the love of Christ through practical acts of service, evangelism, and community engagement, being the hands and feet of Jesus in our city.',
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
    gallery: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?auto=format&fit=crop&q=80&w=600',
    ],
    leader: 'Bro. Samuel Nkrumah',
    contact: 'outreach@icgclwt.org',
  },
] as any[];