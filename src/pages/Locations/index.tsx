import { LocationCard } from "@/components/LocationCard";
import { LocationDetailsDialog } from "@/components/LocationDetailsDialog";
import { Button } from "@/components/ui/button";
import { Location } from "@/types/Location";
import { useState } from "react";

const locations: Location[] = [
    {
        Id: 1,
        Name: "Central Park",
        Description: "Um grande parque no centro da cidade, perfeito para caminhadas e piqueniques.",
        StreetName: "Main Street",
        Number: 123,
        Complement: "Perto da praça principal",
        Neighborhood: "Centro",
        State: "NY",
        City: "New York",
        CEP: "10001",
    },
    {
        Id: 2,
        Name: "Shopping Plaza",
        Description: "Um shopping com várias lojas, restaurantes e cinemas.",
        StreetName: "Market Avenue",
        Number: 456,
        Complement: "Próximo ao terminal rodoviário",
        Neighborhood: "Comercial",
        State: "CA",
        City: "Los Angeles",
        CEP: "90015",
    },
    {
        Id: 3,
        Name: "Praia do Sol",
        Description: "Uma bela praia conhecida pelas suas águas cristalinas.",
        StreetName: "Ocean Drive",
        Number: 789,
        Complement: "Em frente ao quiosque 10",
        Neighborhood: "Praia",
        State: "FL",
        City: "Miami",
        CEP: "33139",
    },
    {
        Id: 4,
        Name: "Museu de Arte Moderna",
        Description: "Exposição permanente de obras de arte contemporâneas.",
        StreetName: "Art Street",
        Number: 10,
        Complement: "Próximo ao Teatro Municipal",
        Neighborhood: "Cultural",
        State: "SP",
        City: "São Paulo",
        CEP: "01001-000",
    },
    {
        Id: 5,
        Name: "Parque das Flores",
        Description: "Um parque botânico com espécies raras de plantas.",
        StreetName: "Garden Road",
        Number: 321,
        Complement: "Ao lado da entrada norte",
        Neighborhood: "Jardim",
        State: "RJ",
        City: "Rio de Janeiro",
        CEP: "20040-020",
    },
    {
        Id: 6,
        Name: "Estádio Nacional",
        Description: "Local de grandes eventos esportivos e shows.",
        StreetName: "Sport Avenue",
        Number: 50,
        Complement: "Setor Oeste",
        Neighborhood: "Esportivo",
        State: "DF",
        City: "Brasília",
        CEP: "70070-000",
    },
    {
        Id: 7,
        Name: "Centro Histórico",
        Description: "Área com construções antigas e rica história cultural.",
        StreetName: "Old Town Road",
        Number: 22,
        Complement: "Próximo ao Museu Histórico",
        Neighborhood: "Histórico",
        State: "MG",
        City: "Ouro Preto",
        CEP: "35400-000",
    },
    {
        Id: 8,
        Name: "Zoológico Municipal",
        Description: "Lar de várias espécies de animais de diferentes partes do mundo.",
        StreetName: "Zoo Lane",
        Number: 800,
        Complement: "Entrada principal",
        Neighborhood: "Parque",
        State: "RS",
        City: "Porto Alegre",
        CEP: "90040-001",
    },
    {
        Id: 9,
        Name: "Biblioteca Pública",
        Description: "Acervo com milhares de livros e espaço para estudos.",
        StreetName: "Knowledge Street",
        Number: 101,
        Complement: "Próximo à estação central",
        Neighborhood: "Acadêmico",
        State: "PR",
        City: "Curitiba",
        CEP: "80010-000",
    },
    {
        Id: 10,
        Name: "Mercado Central",
        Description: "Mercado tradicional com produtos locais e artesanato.",
        StreetName: "Market Street",
        Number: 70,
        Complement: "Área 2",
        Neighborhood: "Comércio",
        State: "BA",
        City: "Salvador",
        CEP: "40000-000",
    },
];

export function Locations() {
    const [isLocationDetailsDialogOpen, setIsLocationDetailsDialogOpen] = useState<boolean>(false)
    
    const openLocationDetailsDialog = () => {
        setIsLocationDetailsDialogOpen(true)
    }
    const closeLocationDetailsDialog = () => {
        setIsLocationDetailsDialogOpen(false)
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold capitalize">Localizações</h3>
                <Button onClick={openLocationDetailsDialog}>Fazer uma Movimentação</Button>
            </div>

            <div className="grid grid-cols-4 gap-1">
                {locations.map((location)=>(
                    <LocationCard key={location.Id} Location={location}/>
                ))}
            </div>

            <LocationDetailsDialog open={isLocationDetailsDialogOpen} onOpenChange={setIsLocationDetailsDialogOpen}/>
        </div>
    )
}