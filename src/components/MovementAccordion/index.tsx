import { AccordionContent, AccordionItem, AccordionTrigger } from "@Components/ui/accordion";
import { ReactNode } from "react";
import { BiBox, BiLogInCircle, BiMap, BiLogOutCircle, BiSolidAdjust } from "react-icons/bi";

interface MovementAccordionProps {
    Movement:string
}
interface MovementAccordionFakeProps {
    Type: "entry" | "output" | "adjustment"
    ProductName: string
    LocationName: string
    Quantity: number
    State: string
}//definir o alias

export function MovementAccordion({Type, LocationName, ProductName, Quantity, State}:MovementAccordionFakeProps) {

    function DefineMovimentIcon(Type:string) :[ReactNode, ReactNode, string] {
        switch (Type) {
            case 'entry':
                return [
                    <BiLogInCircle className="text-sky-900 leading-4" size="1.25rem" />,
                    <BiLogInCircle className="flex-1 w-[40%] max-w-20 text-sky-900" />,
                    'Entrada'
                ]
                break;
        
            case 'output':
                return [
                    <BiLogOutCircle className="text-sky-900 leading-4 rotate-180" size="1.25rem" />,
                    <BiLogOutCircle className="flex-1 w-[40%] max-w-20 text-sky-900 rotate-180" />,
                    'Saída'
                ]
                break;
        
            case 'adjustment':
                return [
                    <BiSolidAdjust className="text-sky-900 leading-4" size="1.25rem" />,
                    <BiSolidAdjust className="flex-1 w-[40%] max-w-20 text-sky-900" />,
                    'Ajuste'
                ]
                break;
        
            default:
                return [
                    <BiSolidAdjust className="text-sky-900 leading-4" size="1.25rem" />,
                    <BiSolidAdjust className="flex-1 w-[40%] max-w-20 text-sky-900" />,
                    'Desconhecido'
                ]
                break;
        }
    }

    let [MovimentHeaderIcon, MovementDetailsIcon, MovementType] = DefineMovimentIcon(Type)

    return(
        <AccordionItem value="4" className="bg-slate-300 rounded-lg">
            <AccordionTrigger>
                <div className="flex items-center font-semibold gap-4 text-base">
                    <span>#12</span> {ProductName} {MovimentHeaderIcon} {LocationName}
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
                        {MovementDetailsIcon}
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