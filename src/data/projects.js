import { pick } from './skills';
import medkoe from '../assets/medkoe.png';
import biblion from '../assets/biblion.png';
import roomio from '../assets/roomio.png';
import suma from '../assets/suma.jpeg';

export const projects = [
  {
    id: 'medkoe',
    period: '2026',
    title: 'MedKoe',
    description: `Fullstack web application that allows audio uploading (MP3,
WAV), audio compression, audio enhancement through filters, audio
transcription, and audio summarization, primarily for use in medical
consultations.`,
    image: medkoe,
    tags: pick(['cs', 'react', 'mysql', 'ts', 'git', 'asp']),
  },
  {
    id: 'roomio',
    period: '2025',
    title: 'Roomio',
    description: `Full-stack web application enabling users to search for
hotels, select room types, and book reservations seamlessly.the type
of room they wish to reserve.`,
    image: roomio,
    tags: pick(['angular', 'html', 'ts', 'git']),
  },
  {
    id: 'biblion',
    period: '2025',
    title: 'Biblion',
    description: `Web application for searching books and retrieving detailed
information about them.`,
    image: biblion,
    tags: pick(['react', 'html', 'ts', 'git']),
  },
  {
    id: 'suma qhatu',
    period: '2024',
    title: 'Suma Qhatu',
    description: `Full-stack web application for searching, buying, and selling
products.`,
    image: suma,
    tags: pick(['cs', 'mysql', 'git', 'asp']),
  },
  {
    id: 'uno',
    period: '2024',
    title: 'UNO Game',
    description: `RESTful API enabling multiplayer play of the classic UNO
card game.`,
    tags: pick(['js', 'mysql', 'git', 'express']),
  },
]