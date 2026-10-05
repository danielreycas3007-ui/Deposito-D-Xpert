import React, { useState } from "react";
import "./App.css";
import logoImage from "./logo.png";

// Importación de tus imágenes reales guardadas en la carpeta src
import anestesiaImage from "./anestesia.png";
import bolsaParaEsterilizarImage from "./bolsa para esterilizar.png";
import camposanelsamImage from "./camposanelsam.png";
import camposborgattaImage from "./camposborgatta.png";
import cubrebocasUnimaskImage from "./cubrebocas unimask.png";
import eyectoresAzulesImage from "./eyectores azules.png";
import eyectoresBorgattaImage from "./eyectores borgatta.png";
import eyectoresSencillosImage from "./eyectores sencillos.png";
import eyectoresUnisealImage from "./eyectoresuniseal.png";
import gasasImage from "./gasas.png";
import guantesDeNitriloImage from "./guantes de nitrilo.png";
import topicainaImage from "./topicaina.png";
import zkInaImage from "./ZK-ina.png";

const products = [
  // --- PRODUCTOS DESDE TU EXCEL ---
  { id: 1, name: "Abre bocas con 3 pzas", price: 35, category: "Instrumental", desc: "Abre bocas para procedimientos clínicos.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" },
  { id: 2, name: "Acentador de bandas Arain", price: 70, category: "Instrumental", desc: "Instrumental de alta calidad para ortodoncia.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700" },
  { id: 3, name: "Acetato rigido .080", price: 22, category: "Laboratorio", desc: "Acetato rígido para férulas.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700" },
  { id: 4, name: "Acetato rigido .060", price: 18, category: "Laboratorio", desc: "Acetato para trabajos de laboratorio dental.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" },
  { id: 5, name: "Ácido grabador", price: 58, category: "Restaurativa", desc: "Ácido grabador dental profesional.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700" },
  { id: 6, name: "Adhesivo Single Bon", price: 955, category: "Adhesivos", desc: "Adhesivo dental de alta fuerza de unión.", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700" },
  { id: 7, name: "Aguja corta", price: 130, category: "Anestesia", desc: "Agujas dentales esterilizadas.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700" },
  { id: 8, name: "Aguja extra corta", price: 130, category: "Anestesia", desc: "Agujas dentales para anestesia local.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700" },
  { id: 9, name: "Alginoplast", price: 216, category: "Impresión", desc: "Alginato de alta precisión.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa2a0?auto=format&fit=crop&q=80&w=700" },
  { id: 10, name: "Antibenzil 3.750", price: 90, category: "Anestesia", desc: "Anestésico tópico profesional.", image: "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700" },
  { id: 11, name: "Arco Striping", price: 55, category: "Ortodoncia", desc: "Arco para tiras de stripping.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700" },
  { id: 12, name: "Biogel", price: 98, category: "Desechables", desc: "Gel protector y lubricante dental.", image: "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700" },
  { id: 13, name: "Blanco de España", price: 36, category: "Laboratorio", desc: "Material para pulido y laboratorio.", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=700" },
  { id: 14, name: "Bolsa para esterilizar 2 1/4", price: 60, category: "Esterilización", desc: "Bolsas grado médico para esterilización.", image: bolsaParaEsterilizarImage },
  { id: 15, name: "Bolsa para esterilizar 3 1/2", price: 138, category: "Esterilización", desc: "Bolsas de esterilización tamaño grande.", image: bolsaParaEsterilizarImage },
  { id: 16, name: "Cadena long", price: 340, category: "Ortodoncia", desc: "Cadena elástica para ortodoncia.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" },
  { id: 17, name: "Caja ortho plastico Anelsam", price: 10, category: "Ortodoncia", desc: "Caja para aparatos de ortodoncia.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700" },
  { id: 18, name: "Caja ortho plastico Italy", price: 12, category: "Ortodoncia", desc: "Caja protectora para retenedores.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700" },
  { id: 19, name: "Campos Anelsam", price: 52, category: "Desechables", desc: "Campos dentales desechables.", image: camposanelsamImage },
  { id: 20, name: "Campos Borgatta", price: 68, category: "Desechables", desc: "Campos para uso profesional.", image: camposborgattaImage },
  { id: 21, name: "Cavex CA37", price: 182, category: "Impresión", desc: "Alginato elástico de gran precisión.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" },
  { id: 22, name: "Cepillo Oral B", price: 25, category: "Higiene", desc: "Cepillo dental para pacientes.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700" },
  { id: 23, name: "Cera de ortodoncia", price: 14, category: "Ortodoncia", desc: "Cera de alivio para brackets.", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700" },
  { id: 24, name: "Cera para modelar", price: 69, category: "Laboratorio", desc: "Cera para trabajos de laboratorio.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700" },
  { id: 25, name: "Charola de plastico", price: 37, category: "Instrumental", desc: "Charola organizadora para instrumental.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700" },
  { id: 26, name: "Cinta testigo", price: 75, category: "Esterilización", desc: "Cinta autoclave indicador de esterilización.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa2a0?auto=format&fit=crop&q=80&w=700" },
  { id: 27, name: "Clinpro", price: 58, category: "Preventiva", desc: "Barniz fluorado profesional.", image: "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700" },
  { id: 28, name: "Conformador de rodillo", price: 14, category: "Laboratorio", desc: "Conformador para rodetes de cera.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700" },
  { id: 29, name: "Coronas anteriores", price: 84, category: "Restaurativa", desc: "Coronas temporales anteriores.", image: "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700" },
  { id: 30, name: "Cubrebocas Anelsam", price: 58, category: "Desechables", desc: "Cubrebocas plisado tricapa.", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=700" },
  { id: 31, name: "Cubrebocas Unimask 3", price: 110, category: "Desechables", desc: "Caja de cubrebocas Unimask alta protección.", image: cubrebocasUnimaskImage },
  { id: 32, name: "Cubrebocas Unimask 4", price: 110, category: "Desechables", desc: "Cubrebocas profesional alta calidad.", image: cubrebocasUnimaskImage },
  { id: 33, name: "Cucharillas parciales", price: 36, category: "Impresión", desc: "Cucharillas metálicas para impresión.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" },
  { id: 34, name: "Detector de caries", price: 165, category: "Restaurativa", desc: "Revelador de caries profesional.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700" },
  { id: 35, name: "Dique Maxsafe 5x5 verde", price: 275, category: "Endodoncia", desc: "Dique de hule látex verde.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700" },
  { id: 36, name: "Dique Maxsafe 6x6 rosa", price: 290, category: "Endodoncia", desc: "Dique de hule látex rosa.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" },
  { id: 37, name: "Dique Nictone 5x5", price: 310, category: "Endodoncia", desc: "Dique de alta resistencia.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700" },
  { id: 38, name: "Disco de carburo", price: 5, category: "Laboratorio", desc: "Disco para corte de materiales.", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700" },
  { id: 39, name: "Discos Shofu", price: 70, category: "Laboratorio", desc: "Discos de pulido y acabado.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700" },
  { id: 40, name: "Dowel pin rojo o verde", price: 3.5, category: "Laboratorio", desc: "Pines metálicos para modelos de trabajo.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700" },
  { id: 41, name: "Espátula de plástico alginato", price: 10, category: "Instrumental", desc: "Espátula para mezclar alginato.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa2a0?auto=format&fit=crop&q=80&w=700" },
  { id: 42, name: "Espátula doble cemento Arain", price: 35, category: "Instrumental", desc: "Espátula metálica para cemento.", image: "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700" },
  { id: 43, name: "Espátula Normar Arain", price: 35, category: "Instrumental", desc: "Espátula profesional para resinas/cemento.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700" },
  { id: 44, name: "Espátula para cemento", price: 5, category: "Instrumental", desc: "Espátula económica para mezcla.", image: "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700" },
  { id: 45, name: "Espejo #5 Arain", price: 16, category: "Instrumental", desc: "Espejo dental número 5.", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=700" },
  { id: 46, name: "EverX Posterior", price: 96, category: "Restaurativa", desc: "Resina reforzada con fibra.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" },
  { id: 47, name: "Fixodent Plus", price: 90, category: "Higiene", desc: "Adhesivo para prótesis dental.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700" },
  { id: 48, name: "Flux 20grs", price: 30, category: "Laboratorio", desc: "Fundente para soldadura dental.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700" },
  { id: 49, name: "Fresa de carburo HP703L", price: 45, category: "Rotatorios", desc: "Fresa de carburo de alta duración.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" },
  { id: 50, name: "Fresa dorada corte metal y porcelana", price: 84, category: "Rotatorios", desc: "Fresa especial para corte de coronas.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700" },
  { id: 51, name: "Fresero metalico", price: 90, category: "Instrumental", desc: "Organizador de fresas metálico.", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700" },
  { id: 52, name: "Fuji Plus Mini Ionomero", price: 850, category: "Restaurativa", desc: "Ionómero de vidrio para cementación.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700" },
  { id: 53, name: "Gas butano", price: 45, category: "Laboratorio", desc: "Gas para soplete de laboratorio.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700" },
  { id: 54, name: "Gasa hemostatica S-99", price: 185, category: "Cirugía", desc: "Gasa hemostática quirúrgica.", image: gasasImage },
  { id: 55, name: "Gasas", price: 28, category: "Desechables", desc: "Gasas absorbentes para procedimientos.", image: gasasImage },
  { id: 56, name: "Glassion", price: 610, category: "Restaurativa", desc: "Ionómero restaurador.", image: "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700" },
  { id: 57, name: "Godete de silicon", price: 10, category: "Laboratorio", desc: "Godete flexible para mezcla.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700" },
  { id: 58, name: "Godete de vidrio", price: 12, category: "Laboratorio", desc: "Godete de vidrio pesado.", image: "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700" },
  { id: 59, name: "Guante de nitrilo metalicos", price: 138, category: "Desechables", desc: "Guantes de nitrilo color especial.", image: guantesDeNitriloImage },
  { id: 60, name: "Guantes de Nitrilo", price: 140, category: "Desechables", desc: "Caja con 100 piezas. Selecciona tu talla.", image: guantesDeNitriloImage, sizes: ["XS", "X", "M"] },
  { id: 61, name: "Gutapercha #15-40 1era", price: 88, category: "Endodoncia", desc: "Conos de gutapercha primera serie.", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=700" },
  { id: 62, name: "Gutapercha #45-80 2da", price: 88, category: "Endodoncia", desc: "Conos de gutapercha segunda serie.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" },
  { id: 63, name: "Hemodent", price: 399, category: "Cirugía", desc: "Líquido hemostático gingival.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700" },
  { id: 64, name: "Hidroxido de calcio", price: 150, category: "Endodoncia", desc: "Hidróxido de calcio puro.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700" },
  { id: 65, name: "Hilo plano con cera", price: 35, category: "Higiene", desc: "Seda dental encerada plana.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" },
  { id: 66, name: "Hilo plano sabor menta", price: 40, category: "Higiene", desc: "Hilo dental refrescante sabor menta.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700" },
  { id: 67, name: "Hilo sin cera", price: 25, category: "Higiene", desc: "Hilo dental tradicional sin cera.", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700" },
  { id: 68, name: "Hilo Super Floss Oral-B", price: 90, category: "Higiene", desc: "Hilo especial para puentes y ortodoncia.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700" },
  { id: 69, name: "Induret gel tubo", price: 350, category: "Laboratorio", desc: "Gel duplicador para laboratorio.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700" },
  { id: 70, name: "IRM", price: 536, category: "Restaurativa", desc: "Material restaurador temporal reforzado.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa2a0?auto=format&fit=crop&q=80&w=700" },
  { id: 71, name: "Jeringa Supreme A2", price: 470, category: "Restaurativa", desc: "Resina compuesta en jeringa color A2.", image: "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700" },
  { id: 72, name: "Ketac Cem", price: 810, category: "Restaurativa", desc: "Ionómero de vidrio para cementación definitiva.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700" },
  { id: 73, name: "Kromopan", price: 268, category: "Impresión", desc: "Alginato cromático de alta estabilidad.", image: "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700" },
  { id: 74, name: "Anestesia FD", price: 550, category: "Anestesia", desc: "Anestésico dental con epinefrina.", image: anestesiaImage },
  { id: 75, name: "Ligas intraorales surtidas", price: 23, category: "Ortodoncia", desc: "Ligas elásticas para ortodoncia.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" },
  { id: 76, name: "Liquido normal 250ml", price: 170, category: "Laboratorio", desc: "Líquido para acrílico autopolimerizable.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700" },
  { id: 77, name: "Liquido rapido 125ml", price: 100, category: "Laboratorio", desc: "Líquido acrílico rápido.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700" },
  { id: 78, name: "Liquido rapido 250ml", price: 185, category: "Laboratorio", desc: "Líquido acrílico de fraguado rápido presentación 250ml.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" },
  { id: 79, name: "Lozeta 0.09", price: 23, category: "Laboratorio", desc: "Lozeta de vidrio para mezclas.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700" },
  { id: 80, name: "Lozeta 0.6", price: 17, category: "Laboratorio", desc: "Lozeta para mezcla de materiales.", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700" },
  { id: 81, name: "Mandril baja", price: 10, category: "Rotatorios", desc: "Mandril para pieza de mano baja velocidad.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700" },
  { id: 82, name: "Mi Paste Plus", price: 350, category: "Preventiva", desc: "Crema dental con recaldent y flúor.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700" },
  { id: 83, name: "Micro aplicadores", price: 55, category: "Desechables", desc: "Pinceles aplicadores desechables (Caja).", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa2a0?auto=format&fit=crop&q=80&w=700" },
  { id: 84, name: "Mini eyector", price: 59, category: "Desechables", desc: "Eyectores de saliva tamaño mini.", image: eyectoresSencillosImage },
  { id: 85, name: "Modulos llave color", price: 19, category: "Ortodoncia", desc: "Módulos elásticos para brackets.", image: "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700" },
  { id: 86, name: "Neo-MTA", price: 943, category: "Endodoncia", desc: "Agregado trióxido mineral avanzado.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700" },
  { id: 87, name: "Opalescence", price: 120, category: "Estética", desc: "Gel blanqueador dental profesional.", image: "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700" },
  { id: 88, name: "Optosil Kit", price: 1250, category: "Impresión", desc: "Silicona por condensación kit completo.", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=700" },
  { id: 89, name: "Oranwash tubo de 140ml", price: 470, category: "Impresión", desc: "Silicona fluida por condensación.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" },
  { id: 90, name: "Papel de articular", price: 25, category: "Instrumental", desc: "Papel para control de oclusión.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700" },
  { id: 91, name: "Pasta Diamond", price: 235, category: "Laboratorio", desc: "Pasta diamantada para pulido final.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700" },
  { id: 92, name: "Pasta profilaxis", price: 130, category: "Preventiva", desc: "Pasta para limpieza y pulido profiláctico.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" },
  { id: 93, name: "Piedra Arkansas", price: 21, category: "Rotatorios", desc: "Piedra para desbaste fino y acabado.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700" },
  { id: 94, name: "Piedra montada cualquiera", price: 8, category: "Rotatorios", desc: "Piedra montada para alta o baja velocidad.", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700" },
  { id: 95, name: "Polvo acrilico normal 190grs", price: 243, category: "Laboratorio", desc: "Acrílico termopolimerizable en polvo.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700" },
  { id: 96, name: "Polvo acrilico R1V/62/R5V", price: 130, category: "Laboratorio", desc: "Polvo acrílico tonos dentales.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700" },
  { id: 97, name: "Porta hilo VOR", price: 30, category: "Cirugía", desc: "Porta hilo quirúrgico.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa2a0?auto=format&fit=crop&q=80&w=700" },
  { id: 98, name: "Protector para cepillo", price: 4, category: "Higiene", desc: "Protector plástico para cabezal de cepillo.", image: "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700" },
  { id: 99, name: "Punta de hule para acrilico verde", price: 16, category: "Laboratorio", desc: "Punta abrasiva de hule para pulir acrílico.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700" },
  { id: 100, name: "Pusher Arain", price: 135, category: "Instrumental", desc: "Empujador de bandas profesional.", image: "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700" },
  { id: 101, name: "Ratones bote", price: 135, category: "Laboratorio", desc: "Insumo de laboratorio dental.", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=700" },
  { id: 102, name: "Redta", price: 250, category: "Endodoncia", desc: "Quelante para endodoncia.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" },
  { id: 103, name: "Retractor de carrillo metal VOR", price: 48, category: "Instrumental", desc: "Retractor metálico fotográfico/clínico.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700" },
  { id: 104, name: "Rojo ingles", price: 36, category: "Laboratorio", desc: "Óxido de hierro para pulido.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700" },
  { id: 105, name: "Rollo de ligadura", price: 35, category: "Ortodoncia", desc: "Rollo de alambre de ligadura metálica.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" },
  { id: 106, name: "Satinhemostatico", price: 31, category: "Cirugía", desc: "Material hemostático.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700" },
  { id: 107, name: "Separador yeso-acrilico", price: 66, category: "Laboratorio", desc: "Laca separadora para acrílico y yeso.", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700" },
  { id: 108, name: "Silano", price: 290, category: "Restaurativa", desc: "Agente de unión para porcelana.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700" },
  { id: 109, name: "Simplex PWD cold cure rapido R1V", price: 60, category: "Laboratorio", desc: "Acrílico rápido autopolimerizable.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700" },
  { id: 110, name: "Solare Universal", price: 600, category: "Restaurativa", desc: "Resina compuesta universal de alta estética.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa2a0?auto=format&fit=crop&q=80&w=700" },
  { id: 111, name: "Super Gayz original", price: 211, category: "Endodoncia", desc: "Instrumental endodóntico Gates Glidden.", image: "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700" },
  { id: 112, name: "Super Gayz superado", price: 211, category: "Endodoncia", desc: "Fresas Gates Glidden reforzadas.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700" },
  { id: 113, name: "Sutura Vicryl 3-0 70x20", price: 115, category: "Cirugía", desc: "Sutura quirúrgica absorbible.", image: "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700" },
  { id: 114, name: "Tableta reveladora", price: 160, category: "Radiología", desc: "Químicos para revelado dental.", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=700" },
  { id: 115, name: "Taxie tarro", price: 130, category: "Laboratorio", desc: "Tarro contenedor de laboratorio.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" },
  { id: 116, name: "Tira de alambre .032 y .040", price: 18, category: "Ortodoncia", desc: "Alambre redondo para aparatología.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700" },
  { id: 117, name: "Tira de alambre .036", price: 18, category: "Ortodoncia", desc: "Alambre de acero inoxidable.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700" },
  { id: 118, name: "Tira de lija striping doble", price: 150, category: "Ortodoncia", desc: "Tiras de lija diamantada interproximal.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" },
  { id: 119, name: "Tiras de celuloide", price: 20, category: "Restaurativa", desc: "Tiras matrices de celuloide transparentes.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700" },
  { id: 120, name: "Tiras de lija para resina", price: 106, category: "Restaurativa", desc: "Tiras de pulido interproximal para resinas.", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700" },
  { id: 121, name: "Tri Plaque", price: 490, category: "Preventiva", desc: "Revelador de placa bacteriana de 3 tonos.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700" },
  { id: 122, name: "Ultrapex", price: 420, category: "Endodoncia", desc: "Localizador y material endodóntico.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700" },
  { id: 123, name: "Vasos de papel", price: 28, category: "Desechables", desc: "Paquete de vasos desechables para pacientes.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa2a0?auto=format&fit=crop&q=80&w=700" },
  { id: 124, name: "Viarclean clorhexidina", price: 63, category: "Esterilización", desc: "Solución limpiadora y desinfectante.", image: "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700" },
  { id: 125, name: "Xylol", price: 105, category: "Endodoncia", desc: "Solvente de gutapercha.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700" },
  { id: 126, name: "Yeso blanca nieves x kilo", price: 18, category: "Laboratorio", desc: "Yeso tipo II para modelos de estudio.", image: "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700" },
  { id: 127, name: "Zetaplus", price: 830, category: "Impresión", desc: "Silicona pesada por condensación.", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=700" },
  { id: 128, name: "Zhermack Hidrocolor", price: 270, category: "Impresión", desc: "Alginato Zhermack hidrocoloide.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" },
  { id: 129, name: "Zhermack Neocolloid", price: 310, category: "Impresión", desc: "Alginato de fraguado normal.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700" },
  { id: 130, name: "Zhermack Orthoprint", price: 305, category: "Impresión", desc: "Alginato especial para ortodoncia aroma vainilla.", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=700" },
  { id: 131, name: "Zhermack Tropicalgin", price: 290, category: "Impresión", desc: "Alginato cromático con aroma tropical.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" },
  { id: 132, name: "Sutura seda 3-0", price: 350, category: "Cirugía", desc: "Sutura de seda negra quirúrgica con aguja.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=700" },
  { id: 133, name: "Fresa de diamante economica", price: 13, category: "Rotatorios", desc: "Fresa diamantada para alta velocidad.", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=700" },
  { id: 134, name: "Punta irrigadora Endo Eze", price: 5, category: "Endodoncia", desc: "Puntas flexibles para irrigación endodóntica.", image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=700" },
  { id: 135, name: "Puntas de papel", price: 65, category: "Endodoncia", desc: "Puntas de papel absorbente esterilizadas.", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=700" },
  { id: 136, name: "Postes de fibra", price: 50, category: "Restaurativa", desc: "Postes de fibra de vidrio intrarradiculares.", image: "https://images.unsplash.com/photo-1606265752439-1f18756aa2a0?auto=format&fit=crop&q=80&w=700" },
  { id: 137, name: "Codificador rosa", price: 110, category: "Instrumental", desc: "Anillos de silicón codificadores para instrumental.", image: "https://images.unsplash.com/photo-1588776813677-77f0c5e4e5b0?auto=format&fit=crop&q=80&w=700" },
  { id: 138, name: "Coronas de celuloide", price: 64, category: "Restaurativa", desc: "Caja de coronas transparentes de celuloide.", image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=700" },
  { id: 139, name: "Hilo retractor", price: 95, category: "Cirugía", desc: "Hilo retractor gingival.", image: "https://images.unsplash.com/photo-1581585098991-5d8d4e8f8c1b?auto=format&fit=crop&q=80&w=700" },
  { id: 140, name: "Topicaina", price: 98, category: "Anestesia", desc: "Anestésico tópico en gel.", image: topicainaImage },
  { id: 141, name: "ZK-ina", price: 214, category: "Anestesia", desc: "Anestésico dental profesional.", image: zkInaImage },
  { id: 142, name: "Eyectores Uniseal", price: 90, category: "Desechables", desc: "Eyectores de saliva Uniseal x 100 pzas.", image: eyectoresUnisealImage },
  { id: 143, name: "Eyectores Borgatta", price: 100, category: "Desechables", desc: "Eyectores de saliva Borgatta.", image: eyectoresBorgattaImage },
  { id: 144, name: "Eyectores Sencillos", price: 60, category: "Desechables", desc: "Eyectores de saliva económicos.", image: eyectoresSencillosImage },
  { id: 145, name: "Eyectores Azules", price: 80, category: "Desechables", desc: "Eyectores de saliva color azul.", image: eyectoresAzulesImage },
];

function App() {
  const [view, setView] = useState("shop");
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "ai",
      text: "Hola, Doctor. Soy el asistente D-Xpert. Puedo ayudarle a encontrar insumos, consultar precios del catálogo y orientarle con su pedido.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const categories = [
    "Todos",
    "Restaurativa",
    "Anestesia",
    "Adhesivos",
    "Desechables",
    "Esterilización",
    "Endodoncia",
    "Ortodoncia",
    "Laboratorio",
    "Cirugía",
    "Impresión"
  ];

  // -----------------------------
  // CARRITO
  // -----------------------------

  const addToCart = (product, size = null) => {
    if (product.sizes && !size) {
      setSelectedProduct(product);
      setSelectedSize("");
      return;
    }

    const cartId = size ? `${product.id}-${size}` : `${product.id}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.cartId === cartId);

      if (existing) {
        return prev.map((item) =>
          item.cartId === cartId
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty: 1,
          size,
          cartId,
        },
      ];
    });

    setSelectedProduct(null);
    setSelectedSize("");
  };

  const updateQty = (cartId, amount) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.qty + amount;

            if (newQty <= 0) return null;

            return {
              ...item,
              qty: newQty,
            };
          }

          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (cartId) => {
    setCart((prev) =>
      prev.filter((item) => item.cartId !== cartId)
    );
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.qty,
    0
  );

  // -----------------------------
  // PRODUCTOS FILTRADOS
  // -----------------------------

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "Todos" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // -----------------------------
  // ASISTENTE IA
  // -----------------------------

  const sendMessage = (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    const message = inputMessage;

    setChatMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    setInputMessage("");

    setTimeout(() => {
      const text = message.toLowerCase();

      let response =
        "Claro, Doctor. Puedo ayudarle a encontrar el insumo que necesita dentro del catálogo completo D-Xpert.";

      if (text.includes("guante")) {
        response =
          "Contamos con guantes de nitrilo normales a $120/$140 MXN (tallas XS, X, M) y metálicos a $138 MXN.";
      }

      if (
        text.includes("eyector") ||
        text.includes("eyectores")
      ) {
        response =
          "Tenemos eyectores Uniseal ($90), Borgatta ($100), sencillos ($60), azules ($80) y mini eyectores ($59).";
      }

      if (
        text.includes("anestesia") ||
        text.includes("topicaina") ||
        text.includes("zk")
      ) {
        response =
          "Encontrará Anestesia FD ($550), Topicaina ($98), ZK-ina ($214) y Agujas dentales en la sección correspondiente.";
      }

      if (
        text.includes("pedido") ||
        text.includes("comprar")
      ) {
        response =
          "Agregue los productos al carrito y seleccione 'Continuar pedido' para indicar sus datos de entrega.";
      }

      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: response,
        },
      ]);
    }, 700);
  };

  return (
    <div className="app">

      {/* HEADER */}

      <header className="header">

        <div
          className="logo-container"
          onClick={() => setView("shop")}
        >
          <img
            src={logoImage}
            alt="D-Xpert"
            className="logo"
          />
        </div>

        <nav className="nav">

          <button
            className={view === "shop" ? "nav-active" : ""}
            onClick={() => setView("shop")}
          >
            Catálogo
          </button>

          <button
            className={view === "chat" ? "nav-active" : ""}
            onClick={() => setView("chat")}
          >
            ✨ Asistente
          </button>

          <button
            className="cart-button"
            onClick={() => setView("cart")}
          >
            🛒 Carrito

            {totalItems > 0 && (
              <span className="cart-counter">
                {totalItems}
              </span>
            )}
          </button>

        </nav>

      </header>

      {/* CONTENIDO */}

      <main>

        {/* ========================= */}
        {/* TIENDA */}
        {/* ========================= */}

        {view === "shop" && (
          <>

            {/* HERO */}

            <section className="hero">

              <div className="hero-content">

                <span className="hero-label">
                  DEPÓSITO DENTAL PROFESIONAL
                </span>

                <h1>
                  Todo lo que tu clínica necesita,
                  <span> en un solo lugar.</span>
                </h1>

                <p>
                  Insumos dentales seleccionados para
                  profesionales que buscan calidad,
                  confianza y servicio.
                </p>

                <div className="hero-search">

                  <span>⌕</span>

                  <input
                    type="text"
                    placeholder="¿Qué estás buscando, Doctor?"
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />

                </div>

              </div>

            </section>

            {/* CATEGORIAS */}

            <section className="categories">

              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    selectedCategory === category
                      ? "category-active"
                      : ""
                  }
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                >
                  {category}
                </button>
              ))}

            </section>

            {/* PRODUCTOS */}

            <section className="catalog-section">

              <div className="section-title">

                <div>
                  <span>CATÁLOGO D-XPERT</span>

                  <h2>
                    Insumos para profesionales
                  </h2>
                </div>

                <p>
                  {filteredProducts.length} productos
                </p>

              </div>

              <div className="products-grid">

                {filteredProducts.map((product) => (

                  <article
                    className="product-card"
                    key={product.id}
                  >

                    <div className="product-image-container">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />

                      <span className="product-category">
                        {product.category}
                      </span>

                    </div>

                    <div className="product-info">

                      <h3>
                        {product.name}
                      </h3>

                      <p>
                        {product.desc}
                      </p>

                      {product.sizes && (
                        <div className="size-preview">
                          XS · X · M
                        </div>
                      )}

                      <div className="product-bottom">

                        <div>
                          <strong>
                            $
                            {product.price.toLocaleString(
                              "es-MX"
                            )}
                            <small> MXN</small>
                          </strong>
                        </div>

                        <button
                          className="add-button"
                          onClick={() =>
                            addToCart(product)
                          }
                        >
                          Agregar
                        </button>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            </section>

          </>
        )}

        {/* ========================= */}
        {/* MODAL TALLAS */}
        {/* ========================= */}

        {selectedProduct && (

          <div
            className="modal-overlay"
            onClick={() =>
              setSelectedProduct(null)
            }
          >

            <div
              className="product-modal"
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedProduct(null)
                }
              >
                ×
              </button>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />

              <div className="modal-info">

                <span>
                  {selectedProduct.category}
                </span>

                <h2>
                  {selectedProduct.name}
                </h2>

                <p>
                  {selectedProduct.desc}
                </p>

                <h4>
                  Selecciona la talla
                </h4>

                <div className="sizes">

                  {selectedProduct.sizes.map(
                    (size) => (

                      <button
                        key={size}
                        className={
                          selectedSize === size
                            ? "size-selected"
                            : ""
                        }
                        onClick={() =>
                          setSelectedSize(size)
                        }
                      >
                        {size}
                      </button>

                    )
                  )}

                </div>

                <div className="modal-price">
                  $
                  {selectedProduct.price.toLocaleString(
                    "es-MX"
                  )}
                  MXN
                </div>

                <button
                  className="modal-add"
                  disabled={!selectedSize}
                  onClick={() =>
                    addToCart(
                      selectedProduct,
                      selectedSize
                    )
                  }
                >
                  🛒 Agregar al carrito
                </button>

              </div>

            </div>

          </div>

        )}

        {/* ========================= */}
        {/* CARRITO */}
        {/* ========================= */}

        {view === "cart" && (

          <section className="page-container">

            <div className="page-header">

              <div>
                <span>D-XPERT</span>

                <h1>
                  Tu carrito
                </h1>
              </div>

              <button
                className="secondary-button"
                onClick={() => setView("shop")}
              >
                ← Seguir comprando
              </button>

            </div>

            {cart.length === 0 ? (

              <div className="empty-cart">

                <div className="empty-icon">
                  🛒
                </div>

                <h2>
                  Tu carrito está vacío
                </h2>

                <p>
                  Agrega los insumos que necesitas
                  para tu clínica.
                </p>

                <button
                  className="primary-button"
                  onClick={() => setView("shop")}
                >
                  Explorar catálogo
                </button>

              </div>

            ) : (

              <div className="cart-layout">

                <div className="cart-products">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.cartId}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">

                        <h3>
                          {item.name}
                        </h3>

                        {item.size && (
                          <span>
                            Talla: {item.size}
                          </span>
                        )}

                        <p>
                          ${item.price} MXN c/u
                        </p>

                      </div>

                      <div className="quantity">

                        <button
                          onClick={() =>
                            updateQty(
                              item.cartId,
                              -1
                            )
                          }
                        >
                          −
                        </button>

                        <strong>
                          {item.qty}
                        </strong>

                        <button
                          onClick={() =>
                            updateQty(
                              item.cartId,
                              1
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                      <strong className="item-total">
                        ${(
                          item.price *
                          item.qty
                        ).toLocaleString(
                          "es-MX"
                        )} MXN
                      </strong>

                      <button
                        className="remove-button"
                        onClick={() =>
                          removeItem(item.cartId)
                        }
                      >
                        ×
                      </button>

                    </div>

                  ))}

                </div>

                <aside className="summary">

                  <span>
                    RESUMEN
                  </span>

                  <h2>
                    Tu pedido
                  </h2>

                  <div className="summary-row">
                    <span>
                      Productos
                    </span>

                    <strong>
                      {totalItems}
                    </strong>
                  </div>

                  <div className="summary-row">
                    <span>
                      Subtotal
                    </span>

                    <strong>
                      $
                      {totalPrice.toLocaleString(
                        "es-MX"
                      )}{" "}
                      MXN
                    </strong>
                  </div>

                  <div className="summary-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      $
                      {totalPrice.toLocaleString(
                        "es-MX"
                      )}{" "}
                      MXN
                    </strong>

                  </div>

                  <button
                    className="checkout-button"
                    onClick={() =>
                      setView("checkout")
                    }
                  >
                    Continuar pedido →
                  </button>

                </aside>

              </div>

            )}

          </section>

        )}

        {/* ========================= */}
        {/* CHECKOUT */}
        {/* ========================= */}

        {view === "checkout" && (

          <section className="page-container">

            <div className="checkout">

              <div className="page-header">

                <div>
                  <span>FINALIZAR PEDIDO</span>

                  <h1>
                    Datos de entrega
                  </h1>
                </div>

              </div>

              <form
                className="checkout-form"
                onSubmit={(e) => {
                  e.preventDefault();

                  alert(
                    "Pedido registrado correctamente. Esta parte posteriormente se conectará a la base de datos y al sistema de pagos."
                  );
                }}
              >

                <div className="form-section">

                  <h3>
                    Información del doctor
                  </h3>

                  <div className="form-grid">

                    <div className="form-group">

                      <label>
                        Nombre del doctor
                      </label>

                      <input
                        required
                        placeholder="Dr. Juan Pérez"
                      />

                    </div>

                    <div className="form-group">

                      <label>
                        Clínica
                      </label>

                      <input
                        required
                        placeholder="Clínica Dental"
                      />

                    </div>

                    <div className="form-group">

                      <label>
                        Teléfono
                      </label>

                      <input
                        required
                        type="tel"
                        placeholder="55 1234 5678"
                      />

                    </div>

                    <div className="form-group">

                      <label>
                        Correo electrónico
                      </label>

                      <input
                        required
                        type="email"
                        placeholder="doctor@email.com"
                      />

                    </div>

                  </div>

                </div>

                <div className="form-section">

                  <h3>
                    Dirección de entrega
                  </h3>

                  <div className="form-group">

                    <label>
                      Dirección completa
                    </label>

                    <input
                      required
                      placeholder="Calle, número, colonia..."
                    />

                  </div>

                  <div className="form-grid">

                    <div className="form-group">

                      <label>
                        Código postal
                      </label>

                      <input
                        required
                        placeholder="54770"
                      />

                    </div>

                    <div className="form-group">

                      <label>
                        Referencias
                      </label>

                      <input
                        placeholder="Entre calles..."
                      />

                    </div>

                  </div>

                </div>

                <div className="form-section">

                  <h3>
                    Entrega
                  </h3>

                  <div className="form-grid">

                    <div className="form-group">

                      <label>
                        Fecha solicitada
                      </label>

                      <input
                        required
                        type="date"
                      />

                    </div>

                    <div className="form-group">

                      <label>
                        Horario preferente
                      </label>

                      <input
                        required
                        type="time"
                      />

                    </div>

                  </div>

                </div>

                <div className="order-total">

                  <span>
                    Total del pedido
                  </span>

                  <strong>
                    $
                    {totalPrice.toLocaleString(
                      "es-MX"
                    )}{" "}
                    MXN
                  </strong>

                </div>

                <div className="checkout-actions">

                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() =>
                      setView("cart")
                    }
                  >
                    ← Regresar
                  </button>

                  <button
                    type="submit"
                    className="checkout-button"
                  >
                    Confirmar pedido →
                  </button>

                </div>

              </form>

            </div>

          </section>

        )}

        {/* ========================= */}
        {/* ASISTENTE */}
        {/* ========================= */}

        {view === "chat" && (

          <section className="page-container">

            <div className="ai-container">

              <div className="ai-header">

                <div className="ai-avatar">
                  ✦
                </div>

                <div>
                  <span>
                    D-XPERT AI
                  </span>

                  <h2>
                    Asistente dental
                  </h2>

                  <small>
                    En línea
                  </small>
                </div>

              </div>

              <div className="chat-area">

                {chatMessages.map(
                  (message, index) => (

                    <div
                      key={index}
                      className={
                        message.sender === "user"
                          ? "message user-message"
                          : "message ai-message"
                      }
                    >
                      {message.text}
                    </div>

                  )
                )}

              </div>

              <form
                className="chat-form"
                onSubmit={sendMessage}
              >

                <input
                  value={inputMessage}
                  onChange={(e) =>
                    setInputMessage(
                      e.target.value
                    )
                  }
                  placeholder="Escribe tu pregunta..."
                />

                <button>
                  ↑
                </button>

              </form>

            </div>

          </section>

        )}

      </main>

      {/* FOOTER */}

      <footer className="footer">

        <img
          src={logoImage}
          alt="D-Xpert"
        />

        <p>
          D-Xpert · Depósito Dental Profesional
        </p>

        <span>
          Calidad · Confianza · Servicio
        </span>

        <small>
          ©️ 2026 D-Xpert. Todos los derechos reservados.
        </small>

      </footer>

    </div>
  );
}

export default App;