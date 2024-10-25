/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/email', 'N/ui/serverWidget', 'N/query'],
    /**
 * @param{email} email
 * @param{serverWidget} serverWidget
 */
    (email, serverWidget, query) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            if (scriptContext.request.method === 'GET') {
                const form = serverWidget.createForm({
                    title: 'Send Email'
                });
                form.addField({
                    id: 'subject',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Subject'
                });
                form.addField({
                    id: 'message',
                    type: serverWidget.FieldType.TEXTAREA,
                    label: 'Message'
                });
                form.addField({
                    id: 'recipient',
                    type: serverWidget.FieldType.EMAIL,
                    label: 'Recipient'
                });
                form.addSubmitButton({
                    label: 'Send Email'
                });
                scriptContext.response.writePage(form);
            } else {
                log.debug("gs_test_sl - post", scriptContext.request.body);
                query.runSuiteQL({query: `select * from transaction`}).asMappedResults()
            }

        }

        return {onRequest}

    });
