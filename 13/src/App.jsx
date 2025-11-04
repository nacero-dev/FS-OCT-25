import CustomSlider from "./componentes/CustomSlider";
import Carousel from "./componentes/Carousel";
import Menu from "./componentes/Menu"; 

export default function App() {
  const images = [
    "https://images.pexels.com/photos/33430991/pexels-photo-33430991.jpeg",
    "https://images.pexels.com/photos/15280106/pexels-photo-15280106.jpeg",
    "https://images.pexels.com/photos/34036469/pexels-photo-34036469.jpeg",
    "https://images.pexels.com/photos/34555901/pexels-photo-34555901.jpeg",
    "https://images.pexels.com/photos/1123250/pexels-photo-1123250.jpeg"
  ];

  const menuItems = [
    { name: "Inicio", path: "/" },
    {
      name: "Servicios",
      path: "/servicios",
      submenu: [
        { name: "Web", path: "/web" },
        { name: "Diseño", path: "/diseno" },
      ],
    },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-10 p-4">
      {/* Menú */}
      <Menu menuItems={menuItems} />

      {/* Slider original */}
      <CustomSlider images={images} />

      {/* Carrusel nuevo */}
      <Carousel images={images} />
    </div>
  );
}
