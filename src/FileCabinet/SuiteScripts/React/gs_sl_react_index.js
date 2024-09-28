/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 * @author tanwa.sripan
 * Description: Suitelet will provide the front end for the react app
 */
define(['N/file', 'N/query', 'N/ui/serverWidget'],
    /**
     * @param{file} file
     * @param{query} query
     * @param{serverWidget} serverWidget
     */
    (file, query, serverWidget) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            const handleRequest = {
                GET: handleGet
            }
            handleRequest[scriptContext.request.method]?.(scriptContext);
        }

        const handleGet = (scriptContext) => {
            const fileId = query.runSuiteQL({query: `SELECT id FROM file WHERE name = ?`, params: ['index_react_app.html']}).asMappedResults()[0].id;
            if (!fileId) return;
            const fileObj = file.load({id: fileId});
            const page = serverWidget.createForm({
                title: 'Name of app'
            });
            page.addField({
                id: 'custpage_react_app',
                type: serverWidget.FieldType.INLINEHTML,
                label: 'React App'
            }).defaultValue = fileObj.getContents()
            scriptContext.response.writePage(page);
        }


        return {onRequest}

    }) ;
