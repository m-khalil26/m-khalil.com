import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MainLayout } from '@components/layouts/MainLayout'
import {
  ContactMe,
  Hero,
  OpenSource,
  SelectedProjects,
  SkillSet,
  SlashDivider,
} from '@components/structure'
import { useLogMessage } from '@utils/hooks/use-log-message'
import { config } from '@config/config'
import { ExperienceList } from '@components/structure/Experience/ExperienceList'
import { Photos } from '@components/structure/Hobbies/Photos'

const Home: NextPage = () => {
  useLogMessage()

  return (
    <MainLayout>
      <Hero />
      <SlashDivider />
      <ExperienceList />
      <SelectedProjects />
      <OpenSource />
      <SkillSet />
      <Photos/>
      <ContactMe />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale = config.defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
