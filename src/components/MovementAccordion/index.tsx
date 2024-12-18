import { AccordionContent, AccordionItem, AccordionTrigger } from "@Components/ui/accordion";
import { BiBox, BiLogInCircle, BiMap } from "react-icons/bi";

interface MovementAccordionProps {
    Movement:string
}

export function MovementAccordion() {
    return(
        <AccordionItem value="1" className="bg-slate-300 rounded-lg">
            <AccordionTrigger>
                <div className="flex items-center font-semibold gap-4 text-base">
                    <span>#12</span> Cotonetes <BiLogInCircle className="text-sky-900 leading-4" size="1.25rem"/> Irmã Alzira
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
                                <p>Nome:</p>
                                <p>cotonete</p>
                            </div>
                            <div>
                                <p>quatidade:</p>
                                <p>200</p>
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
                                <p>Nome:</p>
                                <p>Rua Irmã Alzira</p>
                            </div>
                            <div>
                                <p>Estado:</p>
                                <p>CE</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black p-[0.5px] mx-1 rounded-sm" />
                    <div className="flex flex-col items-center justify-between w-full">
                        <BiLogInCircle className="flex-1 w-[40%] max-w-20 text-sky-900"/>
                        <div className="text-center">
                            <p>Tipo de movimentação</p>
                            <p className="text-lg font-semibold">Entrada</p>
                        </div>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}