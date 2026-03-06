import { getStrapiMediaUrl } from '@/lib/strapi';

const defaultTeam = [
  { name: 'Dr. Emily Nguyen', title: 'Founder & Lead Dentist', specialization: 'Cosmetic Dentistry' },
  { name: 'Dr. James Tran', title: 'Senior Implantologist', specialization: 'Dental Implants' },
  { name: 'Dr. Sarah Le', title: 'Orthodontist', specialization: 'Invisalign & Braces' },
  { name: 'Dr. Michael Pham', title: 'Endodontist', specialization: 'Root Canal Treatment' },
  { name: 'Dr. Lisa Hoang', title: 'Prosthodontist', specialization: 'Crowns & Veneers' },
  { name: 'Dr. David Vo', title: 'Oral Surgeon', specialization: 'Wisdom Teeth & Surgery' },
];

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  members?: any[];
}

export default function TeamSection({
  title = 'Meet Our Team',
  subtitle = 'Our experienced team of dental professionals is committed to providing you with the highest quality care.',
  members,
}: TeamSectionProps) {
  const displayMembers = members || defaultTeam;

  return (
    <section className="section-padding bg-beige/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayMembers.map((member: any, i: number) => (
            <div key={i} className="text-center group">
              <div className="w-[200px] h-[200px] mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                {member.photo ? (
                  <img
                    src={getStrapiMediaUrl(member.photo?.url)}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[60px] text-gray-400">
                    👨‍⚕️
                  </div>
                )}
              </div>
              <h3 className="text-[20px] font-bold text-black">{member.name}</h3>
              <p className="text-primary text-[15px] font-medium">{member.title}</p>
              <p className="text-text text-[14px] mt-1">{member.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
