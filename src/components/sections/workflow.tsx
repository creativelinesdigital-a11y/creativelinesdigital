import { workflowSteps } from "@/lib/data";

const WorkflowSection = () => {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="text-base font-semibold uppercase text-primary tracking-wider">Creative Lines Digital</h3>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                        Project <span className="gradient-text">Workflow</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Every project we deliver goes through a rigorous process to ensure you get the best end product.
                    </p>
                </div>

                <div className="relative">
                    {/* Desktop timeline */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-px h-[calc(100%-4rem)] bg-border"></div>
                    <div className="hidden md:grid grid-cols-2 gap-x-16 gap-y-20">
                        {workflowSteps.map((step, index) => (
                            <div key={index} className={`relative ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background ${index % 2 === 0 ? '-right-[8.5px]' : '-left-[7.5px]'}`}></div>
                                <div className={`text-right ${index % 2 !== 0 && 'md:hidden'}`}>
                                    <h3 className="text-2xl font-bold mb-2 text-primary">{step.number}</h3>
                                    <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                                <div className={`text-left ${index % 2 === 0 && 'md:hidden'}`}>
                                    <h3 className="text-2xl font-bold mb-2 text-primary">{step.number}</h3>
                                    <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                     {/* Mobile timeline */}
                    <div className="md:hidden relative">
                         <div className="absolute left-4 top-0 w-px h-full bg-border"></div>
                         <div className="space-y-12">
                             {workflowSteps.map((step, index) => (
                                 <div key={index} className="relative pl-12">
                                     <div className="absolute top-1 -left-[7px] w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                                      <h3 className="text-2xl font-bold mb-2 text-primary">{step.number}</h3>
                                     <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                                     <p className="text-muted-foreground">{step.description}</p>
                                 </div>
                             ))}
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;
