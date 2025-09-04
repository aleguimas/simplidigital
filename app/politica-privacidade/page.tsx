import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Simplí Digital',
  description: 'Política de Privacidade da Simplí Digital. Conheça como coletamos, utilizamos e protegemos seus dados pessoais em conformidade com a LGPD.',
  keywords: [
    'política de privacidade',
    'lgpd',
    'proteção de dados',
    'privacidade',
    'simplí digital',
    'dados pessoais',
    'consentimento'
  ],
  openGraph: {
    title: 'Política de Privacidade | Simplí Digital',
    description: 'Política de Privacidade da Simplí Digital em conformidade com a LGPD.',
  },
  alternates: {
    canonical: '/politica-privacidade',
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Política de Privacidade
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Informações Gerais
                </h2>
                <p className="text-gray-700 mb-4">
                  A Simplí Digital, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº [CNPJ], 
                  com sede na [Endereço], é responsável pelo tratamento dos dados pessoais coletados através 
                  deste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
                <p className="text-gray-700">
                  Esta Política de Privacidade tem como objetivo informar sobre como coletamos, utilizamos, 
                  armazenamos e protegemos suas informações pessoais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Dados Coletados
                </h2>
                <p className="text-gray-700 mb-4">
                  Coletamos os seguintes tipos de dados pessoais:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Dados de identificação:</strong> Nome completo, e-mail, telefone</li>
                  <li><strong>Dados de navegação:</strong> Endereço IP, cookies, páginas visitadas</li>
                  <li><strong>Dados de comunicação:</strong> Mensagens enviadas através dos formulários de contato</li>
                  <li><strong>Dados de interesse:</strong> Área de interesse selecionada nos formulários</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Finalidade do Tratamento
                </h2>
                <p className="text-gray-700 mb-4">
                  Utilizamos seus dados pessoais exclusivamente para:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Entrar em contato para envio de propostas comerciais</li>
                  <li>Enviar informações sobre nossos serviços e treinamentos</li>
                  <li>Melhorar a experiência de navegação em nosso site</li>
                  <li>Analisar o tráfego e comportamento dos usuários (com consentimento)</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Base Legal
                </h2>
                <p className="text-gray-700 mb-4">
                  O tratamento de seus dados pessoais é realizado com base em:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Consentimento:</strong> Para cookies e comunicações de marketing</li>
                  <li><strong>Execução de contrato:</strong> Para envio de propostas e informações solicitadas</li>
                  <li><strong>Legítimo interesse:</strong> Para melhorar nossos serviços e site</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Compartilhamento de Dados
                </h2>
                <p className="text-gray-700 mb-4">
                  Não compartilhamos, vendemos ou alugamos seus dados pessoais para terceiros, exceto:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Quando necessário para cumprir obrigações legais</li>
                  <li>Com prestadores de serviços que nos auxiliam (sob contrato de confidencialidade)</li>
                  <li>Com seu consentimento expresso</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Segurança dos Dados
                </h2>
                <p className="text-gray-700 mb-4">
                  Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Acesso não autorizado</li>
                  <li>Alteração, divulgação ou destruição não autorizada</li>
                  <li>Perda acidental</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Seus Direitos
                </h2>
                <p className="text-gray-700 mb-4">
                  Você tem os seguintes direitos em relação aos seus dados pessoais:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li><strong>Acesso:</strong> Solicitar informações sobre seus dados</li>
                  <li><strong>Correção:</strong> Corrigir dados incompletos ou incorretos</li>
                  <li><strong>Exclusão:</strong> Solicitar a exclusão de seus dados</li>
                  <li><strong>Portabilidade:</strong> Transferir seus dados para outro fornecedor</li>
                  <li><strong>Revogação:</strong> Retirar o consentimento a qualquer momento</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Cookies
                </h2>
                <p className="text-gray-700 mb-4">
                  Utilizamos cookies para melhorar sua experiência. Você pode gerenciar suas preferências 
                  de cookies através do banner exibido em nosso site ou nas configurações do seu navegador.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Retenção de Dados
                </h2>
                <p className="text-gray-700 mb-4">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades 
                  descritas nesta política ou conforme exigido por lei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. Contato
                </h2>
                <p className="text-gray-700 mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>E-mail:</strong> privacidade@simplidigital.dev
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Telefone:</strong> (81) 99194-2628
                  </p>
                  <p className="text-gray-700">
                    <strong>Endereço:</strong> [Endereço completo da empresa]
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  11. Alterações
                </h2>
                <p className="text-gray-700">
                  Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que 
                  consulte esta página regularmente para estar ciente de eventuais mudanças.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
