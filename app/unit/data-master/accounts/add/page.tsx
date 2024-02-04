import InputField from '@/components/Input/input-field';
import Layout from '@/components/layout/layout';
import FormAddAccount from '@/components/pages/data-master/accounts/form-add-account';
import React from 'react';

export default function addAccount() {
  return (
    <Layout>
      <h1 className=" font-semibold align-baseline">Tambah Akun</h1>
      <section className="pt-10">
        <div className="px-24">
          <FormAddAccount />
        </div>
      </section>
    </Layout>
  );
}
