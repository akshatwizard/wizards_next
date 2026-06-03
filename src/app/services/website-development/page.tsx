import React from 'react'
import { Section, Wrapper } from '@/components/ui/sections'
import { FadeUp } from '@/components/ui/motion_components'
import ServiceHero from '@/components/services/service_hero'
import { WebDevServiceAbout, WebDevServiceCaseStudy, WebDevServiceClientList, WebDevServiceFAQ, WebDevServiceHero, WebDevServiceIndustriesList, WebDevServiceProcess, WebDevServiceProject, webDevServicesOffered, WebDevServiceTeam, WebDevServiceTechStack, WebDevServiceTestimonial } from '@/constant/services_data'
import ServiceAbout from '@/components/services/service_about'
import ServicesOffered from '@/components/services/service_offered'
import ServiceProcess from '@/components/services/service_process'
import ServiceCaseStudy from '@/components/services/service_case_stydy'
import ServiceProject from '@/components/services/service_project'
import ServiceClientList from '@/components/services/service_client_list'
import ServiceIndustries from '@/components/services/service_industries'
import ServiceTechStack from '@/components/services/service_techstack'
import ServiceCTA from '@/components/services/service_cta'
import ServiceFAQ from '@/components/services/service_faq'
import ServiceTeam from '@/components/services/service_team'
import ServiceTestimonial from '@/components/services/service_testimonial'


export default function WebDevelopmentPage() {
    return (
        <main>
            <ServiceHero data={WebDevServiceHero} />
            <ServiceAbout data={WebDevServiceAbout} />
            <ServicesOffered data={webDevServicesOffered} />
            <ServiceProcess data={WebDevServiceProcess} />
            <ServiceCaseStudy data={WebDevServiceCaseStudy} />
            <ServiceProject data={WebDevServiceProject} />
            <ServiceClientList data={WebDevServiceClientList} />
            <ServiceIndustries data={WebDevServiceIndustriesList} />
            <ServiceTechStack data={WebDevServiceTechStack} />
            <ServiceTeam data={WebDevServiceTeam} />
            <ServiceTestimonial data={WebDevServiceTestimonial} />
            <ServiceFAQ data={WebDevServiceFAQ} />
            <ServiceCTA />
        </main>
    )
}