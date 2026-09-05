import { Award, BookOpen, Heart } from 'lucide-react';

export const CORE_VALUES = [
  {
    icon: BookOpen,
    title: 'Practical Christianity',
    description:
      "Belief that God's word brings actionable truth that produces real-life results.",
  },
  {
    icon: Heart,
    title: 'Human Dignity',
    description: 'Respect and honor for every person created in the image of God.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description:
      'A commitment to maintaining high standards in all endeavors for the glory of God.',
  },
] as const;

export const LOGO_MEANING = [
  {
    title: 'The Globe',
    description:
      'The globe represents the world and our focus to reach out internationally, with the African continent highlighted.',
  },
  {
    title: 'The Four Pillars',
    description:
      'The four pillars represent the main focus and devotion the early church was committed to: Doctrine, Prayer, Fellowship, and Breaking of bread.',
  },
  {
    title: 'The Oval Ring',
    description: 'The oval ring around the emblem holds the pillars together.',
  },
] as const;

export const STATEMENT_OF_FAITH = [
  'that there is one God, eternally existent in three persons: God the Father, God the Son, and God the Holy Spirit.',
  'in the deity of our Lord Jesus Christ, in His virgin birth, and in His bodily resurrection.',
  'the Bible to be the inspired and infallible Word of God.',
  'in salvation by grace through faith in the Lord Jesus Christ.',
  'in the baptism of the Holy Spirit with the evidence of speaking in other tongues as a subsequent gift to salvation.',
  'in the provision of bodily healing in the atoning work of Jesus our Saviour.',
  'in the return of the Lord Jesus Christ and the resurrection of the saved and the lost; the saved unto eternal life, living eternally in the presence of God, and the unsaved unto eternal damnation.',
] as const;

export const ICGC_VISION =
  'To establish the house of God through the development of Model New Testament Christians and churches.';

export const ICGC_MISSION =
  'Raising leaders, shaping vision, influencing society through Christ.';
