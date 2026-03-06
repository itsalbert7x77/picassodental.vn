import { getTeamMembers } from '@/lib/strapi';
import TeamSection from '@/components/sections/TeamSection';

export const metadata = {
  title: 'Our Team',
  description: 'Meet the experienced dental professionals at Picasso Dental Clinic.',
};

export default async function OurTeamPage() {
  let members: any[] = [];

  try {
    const data = await getTeamMembers();
    members = data.data || [];
  } catch {}

  return (
    <>
      <section className="bg-accent py-16">
        <div className="container-custom">
          <h1 className="text-[42px] text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Team
          </h1>
          <p className="text-white/80 text-[18px] mt-2">
            Meet the dental professionals dedicated to your smile
          </p>
        </div>
      </section>
      <TeamSection
        members={members.length > 0 ? members : undefined}
        title="Our Dental Specialists"
        subtitle="Each member of our team brings years of specialized training and a genuine passion for dental care."
      />
    </>
  );
}
