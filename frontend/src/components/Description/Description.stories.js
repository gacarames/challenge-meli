import React from 'react';
import Description from './Description';

export default {
    title: 'ui/Description',
    component: Description,
};

const Template = (args) => <Description {...args} />;

export const ProductDescription = Template.bind({});
ProductDescription.args = {
    content:
        'BAJAJ ROUSER NS 160 financia en 12 cuotas sin interes MOTOR TipoDTS-i monocilíndrico de cuatro tiempos, con 4 válvulas y 2 bujías – Refrigerado por aire Potencia máxima15,5 HP @8500 RPM Torque máximo14,6 N/m @6500 RPM Velocidad máximaN/A Desplazamiento160,3 cc VEHÍCULO Distancia entre ejes1370 mm Largo x Ancho x Alto2017 mm x 803,5 mm x 1060 mm Despeje del suelo175 mm Suspensión delanteraHorquilla delantera telescópica Peso en seco145 Kg Tanque de combustible (Reserva/Utilizable)12 Litros Suspensión traseraAmortiguador Monoshock Nitrox FRENOS Y LLANTAS Tipo de freno delanteroDisco de freno lobulado con caliper flotante Tamaño del freno delanteroDisco hidráulico 240 mm Neumático delantero90/90 - 17, con cámara Tipo de freno traseroDisco hidráulico 230 mm Neumático trasero120/80 - 17, con cámara SISTEMA ELÉCTRICO SistemaArranque eléctrico directo Luz delantera (luz de cruce)Luz de proyector de 55 W Luz delantera (luces altas)Luz elipsoidal de 55 W',
};
