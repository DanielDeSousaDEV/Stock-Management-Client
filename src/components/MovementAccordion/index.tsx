import { Movement } from "@Types/Movement";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@Components/ui/accordion";
import React from "react";
import { BiBox, BiMap, BiSolidAdjust } from "react-icons/bi";
import { RiLoginCircleLine, RiLogoutCircleRLine, RiQuestionLine } from "react-icons/ri";
import { IconBaseProps } from "react-icons";

interface MovementAccordionProps {
    Movement:Movement
}
interface MovementAccordionFakeProps {
    id: string
    Type: "entry" | "output" | "adjustment"
    ProductName: string
    LocationName: string
    Quantity: number
    State: string
}

export function MovementAccordion({id, Type, LocationName, ProductName, Quantity, State, ...Props}:MovementAccordionFakeProps) {

    function DefineMovimentIcon(Type:string) :[React.ComponentType<IconBaseProps>, string] {
        switch (Type) {
            case 'entry':
                return [
                    RiLoginCircleLine,
                    'Entrada'
                ]
                break;
        
            case 'output':
                return [
                    RiLogoutCircleRLine,
                    'Saída'
                ]
                break;
        
            case 'adjustment':
                return [
                    BiSolidAdjust,
                    'Ajuste'
                ]
                break;
        
            default:
                return [
                    RiQuestionLine,
                    'Desconhecido'
                ]
                break;
        }
    }
    
    const [MovimentIcon, MovementType] = DefineMovimentIcon(Type)

    return(
        <AccordionItem value={id} className="bg-slate-200 rounded-lg" {...Props}>
            <AccordionTrigger>
                <div className="flex items-center font-semibold gap-4 text-base">
                    <span>#{id}</span> {ProductName} <MovimentIcon className="text-sky-900 leading-4" size="1.5rem" /> {LocationName}
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="inline-flex justify-between w-full gap-0.5">
                    <div className="flex flex-col w-full">
                        <div className="flex items-center gap-1 text-base font-semibold mb-2">
                            <BiBox /><h4>Produto</h4>
                        </div>
                        <div>
                            <div className="mb-1">
                                <p className="font-semibold">Nome:</p>
                                <p>{ProductName}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Quatidade:</p>
                                <p>{Quantity}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black p-[0.5px] mx-1 rounded-sm" />
                    <div className="flex flex-col w-full">
                        <div className="flex items-center gap-1 text-base font-semibold mb-2">
                            <BiMap /><h4>Localização</h4>
                        </div>
                        <div>
                            <div className="mb-1">
                                <p className="font-semibold">Nome:</p>
                                <p>{LocationName}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Estado:</p>
                                <p>{State}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black p-[0.5px] mx-1 rounded-sm" />
                    <div className="flex flex-col items-center justify-between w-full">
                        <MovimentIcon className="flex-1 w-[40%] max-w-20 text-sky-900" />
                        <div className="text-center">
                            <p>Tipo de movimentação</p>
                            <p className="text-lg font-semibold">{MovementType}</p>
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}