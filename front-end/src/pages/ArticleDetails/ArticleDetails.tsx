import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import SocialShareButtons from "../../components/SocialShareButtons/SocialShareButtons";

const ArticleDetails = (): JSX.Element => {
  return (
    <div>
      <MainLayout>
        {/* start articleDetails section */}
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <div>
            {/* start social share buttons */}
            <div className="mt-7 flex gap-4">
              <h2 className="font-Ubuntu font-medium text-dark-hard mb-4 md:text-xl">
                Share On:
              </h2>
              <SocialShareButtons
                url={encodeURI("")}
                title={encodeURIComponent("")}
              />
            </div>
            {/* end social share buttons */}
          </div>
        </section>
        {/* end articleDetails section */}
      </MainLayout>
    </div>
  );
};

export default ArticleDetails;