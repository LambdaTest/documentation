# LambdaTest OpenAPI Specifications — Combined Reference

> All 12 OpenAPI YAML specs fetched on 2026-07-09 from live Swagger servers.

---

## Table of Contents

1. [Selenium Automation API](#1-selenium-automation-api)
2. [Automated Screenshots API](#2-automated-screenshots-api)
3. [App Automation API (Real Devices)](#3-app-automation-api-real-devices)
4. [Smart UI](#4-smart-ui)
5. [Cypress Automation](#5-cypress-automation)
6. [User Management](#6-user-management)
7. [Test Manager](#7-test-manager)
8. [HyperExecute](#8-hyperexecute)
9. [Accessibility Testing](#9-accessibility-testing)
10. [Analytics](#10-analytics)
11. [Performance Testing](#11-performance-testing)
12. [Audit Logs](#12-audit-logs)

---


## 1. Selenium Automation API

**File:** `selenium-automation.yaml` | **Size:** 106464 bytes | **Lines:** 3574

```yaml
openapi: 3.0.0
info:
  title: TestMu AI Selenium Automation API Documentation
  version: 1.0.2
servers:
#- url: https://virtserver.swaggerhub.com/faisal097/ltma16mar19/1.0.1
#  description: SwaggerHub API Auto Mocking
- url: 'https://api.lambdatest.com/automation/api/v1'
- url: 'https://api.lambdatest.com/automation/api/v2'
  description: 'V2'
- url: 'https://eu-api.lambdatest.com/automation/api/v1'
- url: 'https://eu-api.lambdatest.com/automation/api/v2'
paths:
  /builds:
    get:
      tags:
      - Build
      summary: Fetch all builds of an account.
      description: Fetch all builds of an account. You can limit the number of records and apply filter on status,build date range and sort by users,start date and end date in asc and desc order. You can apply sort on multiple columns.
      operationId: builds
      parameters:
      - name: offset
        in: query
        description: It defines the number of lists on the basis of limit parameter. e.g offset=10
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: limit
        in: query
        description: To fetch specified number of records. e.g. limit=10
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: status
        in: query
        description: To fetch the list of builds with specific statuses. You can pass multiple comma seperated statuses e.g. running,queued,completed,timeout and error.
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: fromdate
        in: query
        description: To fetch the list of builds that executed from the specified Start Date. The Date format must be YYYY-MM-DD. e.g. "2018-03-15".
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: todate
        in: query
        description: To fetch the list of builds that executed till the specified End Date. If both fromdate and todate value provided then it works as range filter. The Date format must be YYYY-MM-DD. e.g. "2018-03-15".
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: sort
        in: query
        description: To sort the list in ascending or descending order using multiple keys. e.g. "asc.user_id,desc.org_id"
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: publicurl
        in: query
        description: >-
          If true, includes the public URL for each build in the response. If false (default), public URLs are omitted. When true, the limit cannot exceed 20.
        required: false
        style: form
        explode: true
        schema:
          type: boolean
          default: false
      - name: username
        in: query
        description: >-
          To filter builds by username(s). You can pass a single username or multiple comma-separated usernames (e.g. "alice,bob").
        required: false
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListBuildResponse'
        400:
          description: Invalid session id value
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /builds/{build_id}:
    get:
      tags:
      - Build
      summary: Fetch specified build details
      description: To fetch build details of the buildid specified by the user.
      operationId: singlebuild
      parameters:
      - name: build_id
        in: path
        description: Build ID that details you want to fetch
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: shareExpiryLimit
        in: query
        description: Days after which share link will get expired (3,7,10,30)
        required: false
        style: form
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SingleBuildResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: Resource not found
      security:
      - basicAuth: []
    delete:
      tags:
      - Build
      summary: Delete Build
      description: To delete specified Build from dashboard.
      operationId: status_ind
      parameters:
      - name: build_id
        in: path
        description: Build ID that need to be deleted
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DeleteBuildResponse'
        400:
          description: Invalid build id value
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
    patch:
      tags:
      - Build
      summary: Update Build Name or Status
      description: To change build name or status
      operationId: build_id
      parameters:
      - name: build_id
        in: path
        description: build id that name need to be changed.
        required: true
        style: simple
        explode: false
        schema:
          type: string
      requestBody:
        description: You can update either name or status or both of a build in single request.
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/EditBuild'
        required: true
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/EditBuildResponse'
        400:
          description: Bad Request
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /build/stop:
    put:
      tags:
      - Build
      summary: Stop tests by BuildID
      description: To stop tests by BuildID.
      parameters:
      - name: build
        in: query
        description: build id for which to stop tests
        required: false
        style: form
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StopBuildResponse'
        400:
          description: Bad operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BuildInvalidQueryParams'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        403:
          description: Forbidden
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BuildActionForbidden'
        404:
          description: Build id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BuildNotFound'
      security:
      - basicAuth: []
  /sessions:
    get:
      tags:
      - Session
      summary: Fetch list of all sessions
      description: To fetch list of sessions. You can also limit the number of records, and paginate through your data using Parameters.
      operationId: sessions
      parameters:
      - name: build_id
        in: query
        description: To filter sessions of specific build.
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: username
        in: query
        description: To filter sessions of specific user.
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: test_name
        in: query
        description: To filter sessions of specific test name.
        required: false
        style: form
        explode: true
        schema:
            type: string
      - name: offset
        in: query
        description: It defines the number of lists on the basis of limit parameter. e.g offset=10
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: limit
        in: query
        description: To fetch specified number of records. e.g. limit=10
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: status
        in: query
        description: To fetch the list of sessions with specific statuses. You can pass multiple comma seperated statuses e.g. running,queued,completed,passed,failed,timeout,error and lambda-error.
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: fromdate
        in: query
        description: To fetch the list of sessions that executed from the specified Start Date. The Date format must be YYYY-MM-DD. e.g. "2018-03-15".
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: todate
        in: query
        description: To fetch the list of sessions that executed till the specified End Date. If both fromdate and todate value provided then it works as range filter. The Date format must be YYYY-MM-DD. e.g. "2018-03-15".
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: sort
        in: query
        description: To sort the list in ascending or descending order using multiple keys. e.g. "asc.user_id,desc.duration"
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: tags
        in: query
        description: To filter basis on test tags. e.g. "testTag1,testTag2,testTag3"
        required: false
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListsTestsResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: Not Found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
  /sessions/{session_id}:
    get:
      tags:
      - Session
      summary: session specific information
      description: To fetch specified session details such as name, status,os,browser,version and all generated logs endpoint.
      parameters:
      - name: session_id
        in: path
        description: SESSION ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      - name: shareExpiryLimit
        in: query
        description: Days after which share link will get expired (3,7,10,30)
        required: false
        style: form
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Session'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: Resource associated to session_id is not available.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
    delete:
      tags:
      - Session
      summary: Delete test session
      description: Delete a session.
      parameters:
      - name: session_id
        in: path
        description: SESSION ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionDeleteSuccess'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        403:
          description: Forbidden! Operation not allowed.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionForbidden'
        404:
          description: Resource associated to session_id is not available.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
    patch:
      tags:
      - Session
      summary: Update test session details.
      description: To update the test session name, status {"passed","failed","skipped", "ignored", "unknown", "error"}, reason, test tags.
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      requestBody:
        description: You can update name, status, test tags of a session in single request.
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateSessionPayload'
        required: true
      responses:
        200:
          description: successful operation.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionUpdateSuccess'
        400:
          description: Bad Request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionBadResquest'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        403:
          description: Forbidden! Operation not allowed.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionForbidden'
        404:
          description: Resource associated to session_id is not available.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
  /sessions/{session_id}/stop:
    put:
      tags:
      - Session
      summary: Stop session by sessionID
      description: To stop session by sessionID.
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StopSessionResponse'
        400:
          description: Bad operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AlreadyStoppedSessionResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
  /sessions/{session_id}/screenshots:
    get:
      tags:
      - Session
      summary: To fetch all step by step screenshots
      description: To fetch all the step by step screenshots in zip format.
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ScreenshotResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
  /sessions/{session_id}/video:
    get:
      tags:
      - Session
      summary: Fetch recorded video of a test session id.
      description: To fetch video of a recorded test session.
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      - name: video_generated_status
        in: query
        description: Video generated status
        style: simple
        schema:
          type: boolean
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/VideoResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
  /sessions/{session_id}/log/command:
    get:
      tags:
      - Session
      summary: command logs of a test session
      description: To fetch the all executed commands of a test session in plain json text. Optionally pass annotationId to fetch annotation-specific command logs.
      operationId: session
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      - name: annotationId
        in: query
        description: "Annotation ID (slug) to fetch command logs for a specific annotation. Take this value from the `annotationId` field of a placeholder entry in the full command log response (e.g. `open-homepage_1`). When provided, returns only the command logs for that annotation on the requested page."
        required: false
        schema:
          type: string
      - name: pageNumber
        in: query
        description: "Page number of the annotation command log to fetch. Only used when `annotationId` is set. Defaults to 1. Annotations spanning multiple pages require separate calls per page."
        required: false
        schema:
          type: integer
          format: int32
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LogResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/log/selenium:
    get:
      tags:
      - Session
      summary: selenium log of a test session
      description: To fetch selenum log that contains grid requests and reponses of a test session in plain json text.
      operationId: session1
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SeleniumLogResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/log/network:
    get:
      tags:
      - Session
      summary: Network log of a test session
      description: To fetch Network log that contains all the requested urls of a test session in plain json text.
      operationId: session2
      parameters:
      - name: session_id
        in: path
        description: get logs based on session id
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SeleniumLogResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/log/console:
    get:
      tags:
      - Session
      summary: console log of a test session
      description: To fetch console log that contains console errors thrown by application during a test session in plain json text.
      operationId: session3
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SeleniumLogResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/log/network.har:
    get:
      tags:
      - Session
      summary: Network har log of a test session
      description: To fetch Network har log that contains all the requested har of a test session in plain json text.
      operationId: session4
      parameters:
      - name: session_id
        in: path
        description: get network har logs based on session id
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SeleniumHarLogResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/log/full-har:
      get:
          tags:
              - Session
          summary: Full har log of a test session
          description: To fetch Full Network har log that contains all the requested har of a test session along with request and response content.
          operationId: fullHar
          parameters:
              -   name: session_id
                  in: path
                  description: get network har logs based on session id
                  required: true
                  style: simple
                  explode: false
                  schema:
                      type: string
          responses:
              200:
                  description: successful operation
                  content:
                      application/octet-stream:
                          schema:
                              type: string
                              format: binary
              400:
                  description: session id not found
                  content:
                      application/json:
                          schema:
                              $ref: '#/components/schemas/SessionNotFound'
              401:
                  description: Access denied. Auth error.
                  content:
                      application/json:
                          schema:
                              $ref: '#/components/schemas/AccessDenied'
          security:
              -   basicAuth: [ ]
  /sessions/{session_id}/terminal-logs:
    post:
      tags:
        - Session
      summary: Upload terminal logs to our lambda storage
      description: "You can upload any test/terminal report generated by the testing framework in json,xml,txt and other common
      format. The file uploaded can then be viewed in the automation dashboard page under LOGS sections. The file size
      should not exceed 2MB"
      operationId: UploadTerminalLogs
      parameters:
        - name: session_id
          in: path
          description: Session ID
          required: true
          style: simple
          explode: false
          schema:
            type: string
      requestBody:
        description: "To upload terminal logs file"
        required: true
        content:
          multipart/form-data:
            schema:
              $ref: "#/components/schemas/UploadTerminalFilePayload"
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UploadTerminalFileResposeData'
        401:
          description: Access denied. Auth error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        400:
          description: Bad Request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UploadTerminalFileSizeError'
      security:
        - basicAuth: []

  /sessions/{session_id}/exceptions:
    post:
      tags:
        - Session
      summary: Upload assertion logs to our lambda storage
      description: "You can upload assertion logs or other logs for a test session. The logs uploaded can then be viewed
      in the automation dashboard page under EXCEPTION sections. You can only upload a list of strings"
      operationId: UploadSessionExceptionLogs
      parameters:
        - name: session_id
          in: path
          description: Session ID
          required: true
          style: simple
          explode: false
          schema:
            type: string
      requestBody:
        description: "To upload exception log for a given test session"
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/UploadExceptionLog"
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UploadTerminalFileResposeData'
        401:
          description: Access denied. Auth error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        400:
          description: Bad Request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UploadTerminalFileSizeError'
      security:
        - basicAuth: []
  /sessions/{session_id}/v2/log/command:
    get:
      tags:
      - Session Logs (V2)
      summary: command logs of a test session
      description: "Returns a signed URL to download the full commands.zip for the session. The zip contains the per-page command log JSON files at the root, plus per-annotation command log JSON files (when present) under an `annotations/` subdirectory. To fetch a single annotation's commands inline (without downloading the zip), use the v1 endpoint with `annotationId`."
      operationId: session command logs (V2)
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LogNewResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/v2/log/selenium:
    get:
      tags:
      - Session Logs (V2)
      summary: selenium/appium log of a test session
      description: To fetch selenum/appium log that contains grid requests and reponses of a test session in plain text.
      operationId: sessionRawLogs (V2)
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LogNewResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/v2/log/network:
    get:
      tags:
      - Session Logs (V2)
      summary: Network log of a test session
      description: To fetch Network log that contains all the requested urls of a test session in plain json text.
      operationId: sessionNetworkLogs (V2)
      parameters:
      - name: session_id
        in: path
        description: get logs based on session id
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LogNewResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/v2/log/console:
    get:
      tags:
      - Session Logs (V2)
      summary: console/browser log of a test session
      description: To fetch console/browser log that contains console errors thrown by application during a test session in plain json text.
      operationId: sessionBrowserLogs (V2)
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LogNewResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/v2/log/network.har:
    get:
      tags:
      - Session Logs (V2)
      summary: Network har log of a test session
      description: To fetch Network har log that contains all the requested har of a test session in plain json text.
      operationId: sessionNetworkHarLogs (V2)
      parameters:
      - name: session_id
        in: path
        description: get network har logs based on session id
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LogNewResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/v2/log/full-har:
      get:
          tags:
            - Session Logs (V2)
          summary: Full har log of a test session
          description: To fetch Full Network har log that contains all the requested har of a test session along with request and response content.
          operationId: sessionNetworkFullHarLogs (V2)
          parameters:
              -   name: session_id
                  in: path
                  description: get network har logs based on session id
                  required: true
                  style: simple
                  explode: false
                  schema:
                      type: string
          responses:
              200:
                  description: successful operation
                  content:
                    application/json:
                      schema:
                        $ref: '#/components/schemas/LogNewResponse'
              400:
                  description: session id not found
                  content:
                      application/json:
                          schema:
                              $ref: '#/components/schemas/SessionNotFound'
              401:
                  description: Access denied. Auth error.
                  content:
                      application/json:
                          schema:
                              $ref: '#/components/schemas/AccessDenied'
          security:
              -   basicAuth: [ ]
  /tests/{test_id}/exceptions:
    post:
      tags:
        - Test
      summary: Upload assertion logs to our lambda storage
      description: "You can upload assertion logs or other logs for a test Id. The logs uploaded can then be viewed
      in the automation dashboard page under EXCEPTION sections. You can only upload a list of strings"
      operationId: UploadTestExceptionLogs
      parameters:
        - name: test_id
          in: path
          description: Test ID
          required: true
          style: simple
          explode: false
          schema:
            type: string
      requestBody:
        description: "To upload exception log for a given test Id"
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/UploadExceptionLog"
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UploadTerminalFileResposeData'
        401:
          description: Access denied. Auth error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        400:
          description: Bad Request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UploadTerminalFileSizeError'
      security:
        - basicAuth: []

  /test/{test_id}/video:
    get:
      tags:
      - Test
      summary: Fetch recorded video of a test id.
      description: To fetch video of a recorded test.
      parameters:
      - name: test_id
        in: path
        description: Test ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      - name: video_generated_status
        in: query
        description: Video generated status
        style: simple
        schema:
          type: boolean
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/VideoResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []

  /tunnels:
    get:
      tags:
      - tunnel
      summary: Fetch running tunnels of your account.
      description: To fetch lists of all tunnels runing in an account.
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GetTunnelsResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: Not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
  /tunnels/{tunnel_id}:
    delete:
      tags:
      - tunnel
      summary: Stop a running tunnel
      description: To stop a running tunnel in your account. e.g 2345
      parameters:
      - name: tunnel_id
        in: path
        description: Your tunnel id.
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TunnelsDeleteResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        403:
          description: Forbidden! Operation not allowed.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TunnelStopForbidden'
        404:
          description: Tunnel with specified id does not exists.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TunnelStopBadRequest'
      security:
      - basicAuth: []
  /platforms:
    get:
      tags:
        - platforms
      summary: Fetch platforms
      description: Fetch platforms along with browsers and versions supported.
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GetPlatformResponse'
#        404:
#          description: Not found
#          content:
#            application/json:
#              schema:
#                $ref: '#/components/schemas/PageNotFound'
  /files:
    get:
      tags:
        - prerun
      summary: Fetch all pre run files uploaded by the user
      description: This API fetches all the pre run executable which are uploaded to our lambda storage.
      operationId: ListFiles
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListPrerunFileResponse'
        401:
          description: Access denied. Auth error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
        - basicAuth: []
    post:
      tags:
        - prerun
      summary: Upload pre run executable file to our lambda storage
      description: "In order to use pre run feature you first need to upload
      your relevant script files to our lambda storage.
      For every pre run action you need to upload 2 scripts (Pre run file and Post run file). Pre run file will
      be executed before starting the test and post run file will be executed after test is completed. If you perform any changes
      in test machine like changing host file, changing windows registry key, installing certificates, then your post run file should undo those changes"
      operationId: UploadPrerun
      requestBody:
        description: "To upload a new pre run executable files"
        required: true
        content:
          multipart/form-data:
            schema:
              $ref: "#/components/schemas/UploadPrerunPayload"
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CreatePrerunResponse'
        401:
          description: Access denied. Auth error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        400:
          description: Bad Request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/InValidJson'
      security:
        - basicAuth: []

  /files/delete:
      delete:
        tags:
          - prerun
        summary: Delete pre run from our lambda storage
        description: "This API deletes a pre run executable script from our lambda storage. Since pre run executable name should be unique, this API is useful
        if you want to re-upload your updated pre run script with the name same as the previous one."
        requestBody:
          description: "To delete a pre run executable"
          required: true
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/DeletePrerunPayload"

        responses:
          200:
            description: Successful operation
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/DeletePrerunResponse'
          400:
            description: Invalid file path value
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/DeletePageNotFound'
          401:
            description: Access denied. Auth error
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/AccessDenied'
        security:
          - basicAuth: []

  /files/validate:
      post:
        tags:
          - prerun
        summary: Check if the file is approved by Lambdatest
        description: "Once the pre run executable is successfully uploaded, LambdaTest will check the script and
        approve it after successful verification. This API will tell if the file is approved or not"
        requestBody:
          description: "To check if the file is approved by Lambdatest"
          required: true
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/ValidatePrerunPayload"
        responses:
          200:
            description: Successful operation
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/ValidatePrerunResponse'
          400:
            description: Invalid file path value
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/ValidatePageNotFound'
          401:
            description: Access denied. Auth error
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/AccessDenied'
        security:
          - basicAuth: []

  /files/download:
      put:
        tags:
          - prerun
        summary: Download pre run executable file.
        requestBody:
          description: "To download a pre run executable"
          required: true
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/DownloadPrerunPayload"
        responses:
          200:
            description: Successful operation
            content:
              application/octet-stream:
                schema:
                  type: string
                  format: binary
          400:
            description: Invalid file path value specified
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/DownloadPrerunPageNotFound'
          401:
            description: Access denied. Auth error
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/AccessDenied'
        security:
          - basicAuth: []


  /user-files:
    get:
      tags:
        - user-files
      summary: Fetch all user files uploaded by the user
      description: This API fetches all the user files which are uploaded to our lambda storage.
      operationId: ListUserFiles
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListUserFileResponse'
        401:
          description: Access denied. Auth error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
        - basicAuth: []
    post:
      tags:
        - user-files
      summary: Upload files to our lambda storage
      description: "You can upload multiple files to our lambda storage. A maximum of 150 files can be uploaded per
      organization. We have limit of 20 MB files size per API. So if you are total file sizes reach the limit, please upload your files in multiple API calls"
      operationId: UploadUserFiles
      requestBody:
        description: "To upload new user files"
        required: true
        content:
          multipart/form-data:
            schema:
              $ref: "#/components/schemas/UploadUserFilePayload"
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UploadUserFilesResposeData'
        401:
          description: Access denied. Auth error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        400:
          description: Bad Request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/InValidJson'
      security:
        - basicAuth: []

  /user-files/delete:
      delete:
        tags:
          - user-files
        summary: Delete user files from our lambda storage
        description: "This API deletes user file from lambda storage"
        requestBody:
          description: "To delete a user fle"
          required: true
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/DeleteUserFilePayload"

        responses:
          200:
            description: Successful operation
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/DeleteUserFileResponse'
          400:
            description: Invalid file path value
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/DeletePageNotFound'
          401:
            description: Access denied. Auth error
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/AccessDenied'
        security:
          - basicAuth: []

  /user-files/download:
      put:
        tags:
          - user-files
        summary: Download user file from lambda storage.
        requestBody:
          description: "To download a user file"
          required: true
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/DownloadUserFilePayload"
        responses:
          200:
            description: Successful operation
            content:
              application/octet-stream:
                schema:
                  type: string
                  format: binary
          400:
            description: Invalid file path value specified
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/DownloadUserFilePageNotFound'
          401:
            description: Access denied. Auth error
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/AccessDenied'
        security:
          - basicAuth: []

  /lighthouse/report/{session_id}:
    get:
      tags:
      - Lighthouse
      summary: To fetch the Lighthouse performance report data.
      description: To fetch URL to download the generated Lighthouse performance report JSON data.
      parameters:
      - name: session_id
        in: path
        description: SESSION ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: Operation successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LighthouseReportResponse'
        400:
          description: Bad Request. Conditional combination of 'chrome' browser & capability 'performance=true' is not there.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Please provide valid inputs. Conditional combination of 'chrome' browser & capability 'performance=true' is not satisfied for the test associated with the given sessionId.
                  status:
                    type: string
                    example: fail
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: Resource associated to session_id is not available.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        500:
          description: Unable to get Lighthouse report data.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Unable to get Lighthouse report data.
                  status:
                    type: string
                    example: fail
      security:
      - basicAuth: []


  /org/concurrency:
      get:
        tags:
          - Organisation
        summary: Get organisation concurrency
        description: This API fetches the organisation level concurrency
        responses:
          200:
            description: successful operation
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/GetOrgConcurrency'
          400:
            description: Invalid request to fetch org concurrency
          401:
            description: Access denied. Auth error.
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/AccessDenied'
        security:
          - basicAuth: []


  /files/extensions:
    get:
      tags:
        - extensions
      summary: Fetch all extensions uploaded by the user
      description: This API fetches all the extensions which are uploaded to our lambda storage.
      operationId: List extension
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListExtensionResponse'
        401:
          description: Access denied. Auth error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
        - basicAuth: [ ]
    post:
      tags:
        - extensions
      summary: Upload new extensions in zip format to our lambda storage
      description: ""
      operationId: UploadExtensions
      requestBody:
        description: "To upload new extensions"
        required: true
        content:
          multipart/form-data:
            schema:
              $ref: "#/components/schemas/UploadExtensionPayload"
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UploadExtensionResponseData'
        401:
          description: Access denied. Auth error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        400:
          description: Bad Request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/InValidJson'
      security:
        - basicAuth: [ ]

  /files/extensions/delete:
    delete:
      tags:
        - extensions
      summary: Delete extension from our lambda storage
      description: "This API deletes extension from lambda storage"
      requestBody:
        description: "To delete a extension"
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/DeleteExtensionPayload"

      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DeleteExtensionResponse'
        400:
          description: Invalid file path value
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DeletePageNotFound'
        401:
          description: Access denied. Auth error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
        - basicAuth: [ ]

  /resolutions:
      get:
          tags:
              - Resolution
          summary: Get Resolutions of Platforms
          description: This API fetches available supported Platforms Resolution
          responses:
              200:
                  description: successful operation
                  content:
                      application/json:
                          schema:
                              $ref: '#/components/schemas/GetResolutions'
              400:
                  description: Invalid request to fetch supported resolutions
              401:
                  description: Access denied. Auth error.
                  content:
                      application/json:
                          schema:
                              $ref: '#/components/schemas/AccessDenied'
          security:
              - basicAuth: []

  /geoLocation/ips:
      get:
          tags:
              - Geolocation
          summary: Get Ips of geolocation
          description: This API fetches all the possible ips of geolocation. It is recommended to filter using two digit country code.
          parameters:
              -   name: countryCode
                  in: query
                  description: To filter ips of specific country.
                  required: false
                  style: form
                  explode: true
                  schema:
                      type: string
          responses:
              200:
                  description: successful operation
                  content:
                      application/json:
                          schema:
                              $ref: '#/components/schemas/GetGeolocationIps'
              401:
                  description: Access denied. Auth error.
                  content:
                      application/json:
                          schema:
                              $ref: '#/components/schemas/AccessDenied'
          security:
              - basicAuth: []

  # /files/profile/{browserName}:
  #   get:
  #     parameters:
  #       - in: path
  #         name: browserName
  #         required: true
  #         schema:
  #           type: string
  #           enum: ["chrome"]
  #         description: Cuurently Supported browserName is "chrome"
  #     tags:
  #       - Browser profiles
  #     summary: Fetch all browser profiles uploaded by the user
  #     description: This API fetches all the browser profiles which are uploaded to our lambda storage.
  #     operationId: List browser profiles
  #     responses:
  #       200:
  #         description: Successful operation
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/ListBrowserProfileResponse'
  #       401:
  #         description: Access denied. Auth error
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/AccessDenied'
  #     security:
  #       - basicAuth: [ ]
  #   post:
  #     parameters:
  #       - in: path
  #         name: browserName
  #         required: true
  #         schema:
  #           type: string
  #           enum: ["chrome"]
  #         description: Cuurently Supported browserName is "chrome"
  #     tags:
  #       - Browser profiles
  #     summary: Upload browser profiles in zip format to our lambda storage
  #     description: This API upload browser profiles to our lambda storage.
  #     operationId: Upload browser profiles
  #     requestBody:
  #       description: "To upload new browser profile"
  #       required: true
  #       content:
  #         multipart/form-data:
  #           schema:
  #             $ref: "#/components/schemas/UploadBrowserProfilePayload"
  #     responses:
  #       200:
  #         description: Successful operation
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/UploadBrowserProfileResponseData'
  #       401:
  #         description: Access denied. Auth error
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/AccessDenied'
  #       400:
  #         description: Bad Request
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/InValidJson'
  #     security:
  #       - basicAuth: [ ]
  #   delete:
  #     parameters:
  #       - in: path
  #         name: browserName
  #         required: true
  #         schema:
  #           type: string
  #           enum: ["chrome"]
  #         description: Cuurently Supported browserName is "chrome"
  #     tags:
  #       - Browser profiles
  #     summary: Delete browser profiles from our lambda storage
  #     description: "This API deletes browser profiles from lambda storage"
  #     requestBody:
  #       description: "To delete a browser profiles"
  #       required: true
  #       content:
  #         application/json:
  #           schema:
  #             $ref: "#/components/schemas/DeleteBrowserProfilePayload"

  #     responses:
  #       200:
  #         description: Successful operation
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/DeleteBrowserProfileResponse'
  #       400:
  #         description: Invalid file path value
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/DeletePageNotFound'
  #       401:
  #         description: Access denied. Auth error
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/AccessDenied'
  #     security:
  #       - basicAuth: [ ]

  /autoheal/test/{test_id}:
    get:
      tags:
      - Autoheal Command Logs
      summary: Fetch autohealed commands data for a test
      description: Retrieve all autohealed commands for a specific test session, including original and healed locators with execution duration.
      operationId: getSeleniumAutohealedData
      parameters:
      - name: test_id
        in: path
        description: Test ID for which to fetch autohealed commands
        required: true
        style: simple
        explode: false
        schema:
          type: string
          example: "DA-WIN-160849-1756966096614912604KKM"
      - name: limit
        in: query
        description: Maximum number of records to return (default 100)
        required: false
        style: form
        explode: true
        schema:
          type: integer
          minimum: 1
          maximum: 1000
          default: 100
          example: 100
      - name: offset
        in: query
        description: Number of records to skip for pagination (default 0)
        required: false
        style: form
        explode: true
        schema:
          type: integer
          minimum: 0
          default: 0
          example: 0
      responses:
        200:
          description: Successfully retrieved autohealed commands data
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AutohealedCommandsResponse'
              example:
                status: "success"
                message: null
                data:
                  total_healed_commands: 11
                  test_id: "DA-WIN-160849-1756966096614912604KKM"
                  healed_commands:
                  - request_id: "LT01K49NG343J2YDNEQ60HQVQY13-6NSZV-US-EAST-1"
                    test_id: "DA-WIN-160849-1756966096614912604KKM"
                    original_locator:
                      using: "css selector"
                      value: "[class=\"list-unstyled\"]>:nth-child(4)>input"
                    healed_locator:
                      using: "css selector"
                      value: "input.custom-checkbox.ng-pristine.ng-untouched.ng-valid.ng-empty"
                    duration: 349
                  - request_id: "LT01K49NG2BMVQ50K6XF53K9VZHN-L2V78-US-EAST-1"
                    test_id: "DA-WIN-160849-1756966096614912604KKM"
                    original_locator:
                      using: "css selector"
                      value: "[class=\"list-unstyled\"]>:nth-child(3)>input"
                    healed_locator:
                      using: "css selector"
                      value: "input.custom-checkbox.ng-pristine.ng-untouched.ng-valid.ng-empty"
                    duration: 398
        400:
          description: Bad request - Invalid parameters
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BadRequest'
              example:
                status: "fail"
                message: "Invalid limit parameter"
                data: null
        401:
          description: Unauthorized - Authentication failed
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Unauthorized'
        404:
          description: Test not found or not accessible
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/NotFound'
              example:
                status: "fail"
                message: "Test not found"
                data: null
        500:
          description: Internal server error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/InternalServerError'
              example:
                status: "error"
                message: "Failed to fetch autohealed data"
                data: null
      security:
      - basicAuth: []


components:
  schemas:
    EditBuild:
      type: object
      properties:
        name:
          type: string
          format: string
        status:
          type: string
          format: string
    EditBuildResponse:
      type: object
      properties:
        message:
          type: string
          example: Build updated successfully
        status:
          type: string
          example: success
        data:
          $ref: '#/components/schemas/EditBuildResponse_data'
    DeleteBuildResponse:
      type: object
      properties:
        message:
          type: string
          example: Build deleted successfully
        status:
          type: string
          example: success
        data:
          $ref: '#/components/schemas/EditBuildResponse_data'
    PageNotFound:
      type: string
      example: '404 page not found'
    GetPlatformResponse:
      type: object
      properties:
        message:
          type: string
          example: Retrieve platforms was successful.
        status:
          type: string
          example: success
        platforms:
          type: array
          items:
            $ref: '#/components/schemas/PlatformResponse_data'
    PlatformResponse_data:
      type: object
      properties:
        platform:
          type: string
        browsers:
          type: array
          items:
            $ref: '#/components/schemas/BrowserResponse_data'
    BrowserResponse_data:
      type: object
      properties:
        browser_name:
          type: string
        version:
          type: string
        type:
          type: string
        slug:
          type: string
    TunnelsDeleteResponse:
      type: object
      properties:
        message:
          type: string
          example: Delete tunnel was successful.
        status:
          type: string
          example: success
    TunnelStopBadRequest:
      type: object
      properties:
        message:
          type: string
          example: Tunnel with specified id not found.
        status:
          type: string
          example: fail
    TunnelStopForbidden:
      type: object
      properties:
        message:
          type: string
          example: Forbidden! Opertaion not allowed.
        status:
          type: string
          example: fail
    AccessDenied:
      type: string
      example: 'HTTP Basic: Access denied.'
    BuildActionForbidden:
      type: object
      properties:
        message:
          example: 'Cannot stop more than 10 builds through this API'
        status:
          example: fail
    ScreenshotResponse:
      type: object
      properties:
        message:
          type: string
          example: Retrieve screenshot url was successful
        status:
          type: string
          example: success
        url:
          type: string
    VideoResponse:
      type: object
      properties:
        message:
          type: string
          example: Retrieve video url was successful
        status:
          type: string
          example: success
        url:
          type: string
        view_video_url:
          type: string
    LogNewResponse:
      type: object
      properties:
        message:
          type: string
          example: URL is succesfully generated
        status:
          type: string
          example: success
        url:
          type: string
    SessionBadResquest:
      type: object
      properties:
        message:
          type: string
          example: Please provide a valid payload
        status:
          type: string
          example: fail
    ListsTestsResponse:
      required:
      - Meta
      - data
      properties:
        Meta:
          $ref: '#/components/schemas/ListsTestsResponse_Meta'
        data:
          type: array
          items:
            $ref: '#/components/schemas/ListsTestsResponse_data'
    LogResponse:
      required:
      - data
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/LogResponse_data'
    ListBuildResponse:
      required:
      - Meta
      - data
      properties:
        Meta:
          $ref: '#/components/schemas/ListsTestsResponse_Meta'
        data:
          type: array
          items:
            $ref: '#/components/schemas/ListBuildResponse_data'
    StopBuildResponseArray:
      type: array
      items:
        type: string
      example:  ["buildId1", "buildId2", "buildId3"]
    SessionData:
      type: object
      properties:
        test_id:
          type: string
          example: Z17EF-OPUKH-BDAE8-YEPXU
        build_id:
          type: integer
          example: 1
        name:
          type: string
          example: mytest
        user_id:
          type: integer
          example: 250563
        username:
          type: string
          example: bahubali
        duration:
          type: integer
          format: int
        platform:
          type: string
          example: win10
        browser:
          type: string
          example: chrome
        browser_version:
          type: string
          example: "71.0"
        device:
          type: string
        status_ind:
          type: string
        session_id:
          type: string
          example: bc02fd99593f14e37850745d66197f89
        build_name:
          type: string
          example: my-build
        create_timestamp:
          type: string
          example: "2019-02-05 08:24:36"
        start_timestamp:
          type: string
          example: "2019-02-05 08:24:58"
        end_timestamp:
          type: string
          example: "2019-02-05 08:27:22"
        remark:
          type: string
          example: completed
        console_logs_url:
          type: string
          example: https://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/console
        network_logs_url:
          type: string
          example: https://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/network
        command_logs_url:
          type: string
          example: http://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/command
        selenium_logs_url:
          type: string
          example: http://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/selenium
        screenshot_url:
          type: string
          example: https://s3.amazonaws.com/ml-screenshots/00HIR-IQNLL-SDVHV-KDTBM/video/index.m3u8
        video_url:
          type: string
          example: https://d15x9hjibri3lt.cloudfront.net/00HIR-IQNLL-SDVHV-KDTBM/screenshots.zip
        customData:
          type: object
    StopSessionResponse:
      type: object
      properties:
        message:
          type: string
          example: Session stopped successfully.
        status:
          type: string
          example: success
        url:
          type: string
    StopBuildResponse:
      type: object
      properties:
        data:
          type: object
          properties:
            builds:
              type: array
              items:
                type: string
              example:  ["buildId1", "buildId2", "buildId3"]
        message:
          type: string
          example: Initiated build stop
        status:
          type: string
          example: success
    AlreadyStoppedSessionResponse:
      type: object
      properties:
        message:
          type: string
          example: Oops! Looks like session is already stopped
        status:
          type: string
          example: fail
        url:
          type: string
    BuildInvalidQueryParams:
      type: object
      properties:
        message:
          type: string
          example: Invalid Query Params provided
        status:
          type: string
          example: fail
    TunnelNotFound:
      type: object
      properties:
        message:
          type: string
          example: No Active tunnel found
        status:
          type: string
          example: success
    GetTunnelsResponse:
      type: object
      properties:
        message:
          type: string
          example: Retrieve tunnel was successful
        status:
          type: string
          example: success
        data:
          type: array
          items:
            $ref: '#/components/schemas/TunnelData'
    TunnelData:
      type: object
      properties:
        dns:
          type: string
        email:
          type: string
        username:
          type: string
        shared_tunnel:
          type: boolean
        folder_path:
          type: string
        local_domains:
          type: string
        org_id:
          type: integer
        start_timestamp:
          type: string
        status_ind:
          type: string
        tunnel_id:
          type: integer
        tunnel_name:
          type: string
        user_id:
          type: integer
    SessionNotFound:
      type: object
      properties:
        message:
          type: string
          example: Either resource not found or already deleted
        status:
          type: string
          example: fail
    BuildNotFound:
      type: object
      properties:
        message:
          type: string
          example: Could not find any build in running state
        status:
          type: string
          example: fail
    SessionForbidden:
      type: object
      properties:
        message:
          type: string
          example: Forbidden! Operation not allowed.
        status:
          type: string
          example: fail
    Session:
      type: object
      properties:
        data:
          $ref: '#/components/schemas/SessionData'
        message:
          type: string
          example: Retrieve session was successful
        status:
          type: string
          description: pet status in the store
          enum:
          - success
          - failed
    SessionUpdateSuccess:
      type: object
      properties:
        message:
          type: string
          example: Session updated successfully
        status:
          type: string
          example: success
    SessionDeleteSuccess:
      type: object
      properties:
        message:
          type: string
          example: Session deleted successfully
        status:
          type: string
          example: success
    UpdateSessionPayload:
      type: object
      properties:
        name:
          type: string
          example: mytest
        status_ind:
          type: string
          example: passed
        reason:
          type: string
          example: all checks passed
        custom_data:
          type: object
        tags:
          type: array
          items:
            type: string
          example:  ["tag1", "tag2", "tag3"]
    EditBuildResponse_data:
      type: object
      properties:
        result:
          type: string
          example: "1"
    ListsTestsResponse_Meta_attributes:
      type: object
      properties:
        org_id:
          type: number
    ListsTestsResponse_Meta_result_set:
      type: object
      properties:
        count:
          type: number
        limit:
          type: number
        offset:
          type: number
        total:
          type: number
    ListsTestsResponse_Meta:
      type: object
      properties:
        attributes:
          $ref: '#/components/schemas/ListsTestsResponse_Meta_attributes'
        result_set:
          $ref: '#/components/schemas/ListsTestsResponse_Meta_result_set'
    ListsTestsResponse_data:
      type: object
      properties:
        test_id:
          type: string
          example: Z17EF-OPUKH-BDAE8-YEPXU
        build_id:
          type: integer
          example: 1
        build_name:
          type: string
          example: MACOS 10.12-CHROME-2018-12-23
        user_id:
          type: integer
          example: 250563
        username:
          type: string
          example: bahubali
        status_ind:
          type: string
          example: passed
        create_timestamp:
          type: string
          example: "2019-02-05T08:24:36.000Z"
        start_timestamp:
          type: string
          example: "2019-02-05T08:24:58.000Z"
        end_timestamp:
          type: string
          example: "2019-02-05T08:27:22.000Z"
        remark:
          type: string
          example: completed
        browser:
          type: string
          example: chrome
        platform:
          type: string
          example: sierra
        version:
          type: string
          example: "39.0"
        name:
          type: string
          example: macos 10.12-chrome-39.0
        session_id:
          type: string
          example: e7f2d78de1a8822c98e91e49428d0569
        device:
          type: string
        duration:
          type: string
          example: "8"
        test_type:
          type: string
          example: selenium
        tag:
          type: array
          items:
            type: string
          example:  ["tag1", "tag2", "tag3"]
        customdata:
          type: object
        selenium_logs:
          type: string
          example: https://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/selenium
        console_logs:
          type: string
          example: https://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/console
        network_logs:
          type: string
          example: https://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/network
        command_logs:
          type: string
          example: http://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/command
    LogResponse_Value:
      type: object
      properties:
        requestId:
          type: string
          example: 82e3b7cd-3b04-4bc8-9d2b-567aff450fe4
        RequestStartTime:
          type: number
          example: 1551356385
        requestMethod:
          type: string
          example: POST
        requestPath:
          type: string
          example: /wd/hub/session/2F42BCCC-BF43-426A-A72F-F58F58167496/element/node-DF5D363E-84A2-4CA4-9AC4-0F398C606082/click
        duration:
          type: number
          example: 8
        requestBody:
          type: string
          example: '{"sessionId": "2F42BCCC-BF43-426A-A72F-F58F58167496", "id": "node-DF5D363E-84A2-4CA4-9AC4-0F398C606082"}'
        responseBody:
          type: string
          example: '{"status":0,"sessionId":"2F42BCCC-BF43-426A-A72F-F58F58167496","value":{}}'
        responseStatus:
          type: string
          example: 200 OK
        screenshotId:
          type: string
    LogResponse_data:
      type: object
      properties:
        logType:
          type: string
          example: requestLog
        testID:
          type: string
          example: 5HLCQ-HPCWH-UOE2O-2CUFA
        status:
          type: number
          example: 0
        timestamp:
          type: number
          example: 1551356385
        Value:
          $ref: '#/components/schemas/LogResponse_Value'
    SingleBuildResponse:
      properties:
        data:
          $ref: '#/components/schemas/SingleBuildResponse_data'
        message:
          type: string
          example: Retrieve build list was successful
        status:
          type: string
          example: success
    ListBuildResponse_data:
      type: object
      properties:
        build_id:
          type: number
          example: 1782
        name:
          type: string
          example: shivam-video-test
        user_id:
          type: number
          example: 1212
        username:
          type: string
          example: shivam
        status_ind:
          type: string
          example: completed
        create_timestamp:
          type: string
          example: 2019-02-05T08:24:36.000Z
        end_timestamp:
          type: string
          example: 2019-02-05T08:27:22.000Z
        project_id:
          type: string
          example: ML
        project_name:
          type: string
          example: magicleap
        tags:
          type: array
          items:
            type: string
          example:  ["tag1", "tag2", "tag3"]
        duration:
          type: number
          example: 719
    SessionUpdateSuccess_data:
      type: object
      properties:
        result:
          type: integer
          format: int
          example: 1
    SeleniumLogResponse:
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/SeleniumLogResponse_data'
    SeleniumHarLogResponse:
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/SeleniumHarLogResponse_data'

    SeleniumHarLogResponse_data:
      type: object
      properties:
        data:
          type: object
          example: object
        message:
          type: string
          example: Downloaded network.har file successfully
        status:
          type: string
          example: success
    SingleBuildResponse_data:
      type: object
      properties:
        build_id:
          type: number
          example: 1
        name:
          type: string
          example: asdaskjaaa
        org_id:
          type: number
          example: 1246
        user_id:
          type: number
          example: 1212
        username:
          type: string
          example: john smith
        status_ind:
          type: string
          example: completed
        create_timestamp:
          type: string
          example: 2018-12-23T14:30:14.000Z
        end_timestamp:
          type: string
          example: 2018-12-25T12:46:38.000Z
        project_id:
          type: number
          example: 24
        tags:
          type: array
          items:
            type: string
          example:  ["tag1", "tag2", "tag3"]
        public_url:
          type: string
          example: https://automation.lambdatest.com/share?shareId=asdas
        duration:
            type: number
            example: 156
        dashboard_url:
            type: string
            example: https://automation.lambdatest.com/build?&build=1

    SeleniumLogResponse_Value:
      type: object
      properties:
        level:
          type: string
          example: INFO
        message:
          type: string
          example: Started new session 2F42BCCC-BF43-426A-A72F-F58F58167496 (org.openqa.selenium.safari.SafariDriverService)
        timestamp:
          type: number
          example: 1551356378609
    SeleniumLogResponse_data:
      type: object
      properties:
        logType:
          type: string
          example: server
        testID:
          type: string
          example: 5HLCQ-HPCWH-UOE2O-2CUFA
        status:
          type: number
          example: 0
        timestamp:
          type: number
          example: 1551356378609
        Value:
          $ref: '#/components/schemas/SeleniumLogResponse_Value'


    DeletePageNotFound:
      type: object
      properties:
        message:
          type: string
          example: "File doesn't exist in lambda storage"
        status:
          type: string
          example: "fail"

    ValidatePageNotFound:
        type: object
        properties:
          message:
            type: string
            example: "The script is not yet approved by our team"
          status:
            type: string
            example: "fail"

    DownloadPrerunPageNotFound:
        type: object
        properties:
          message:
            type: string
            example: "Error in downloading file from lambda storage"
          status:
            type: string
            example: "fail"

    InValidJson:
        type: object
        properties:
          message:
            type: string
            example: "Oops! The name that you have provided already exists. Please use different name or delete this script first"
          status:
            type: string
            example: "fail"

    UploadTerminalFileSizeError:
      type: object
      properties:
        message:
          type: string
          example: "Oops ! file size too large (> 2MB)"
        status:
          type: string
          example: "fail"


    ListPrerunFileResponse:
        required:
          - Meta
          - data
        properties:
          Meta:
            $ref: '#/components/schemas/ListPrerunFileResponse_Meta'
          data:
            type: array
            items:
              $ref: '#/components/schemas/ListPreRunResponse_data'


    ListPrerunFileResponse_Meta:
        type: object
        properties:
          download_url:
            type: string
            example: "http://api.lambdatest.com/automation/api/v1/files/download"
            description: "base download url path"

          org_id:
            type: number
            example: 12345

          total:
            type: number
            example: 1

    ValidatePrerunResponse:
        type: object
        properties:
          data:
            type: object
            properties:
              post_run_file_path:
                type: string
                example: "dialog_disable/post/httpdialogenable.au3"
          message:
            type: string
            example: "File exist in our lambda storage and is approved successfully"
          staus:
            type: string
            example: "success"

    UploadPrerunResposeData:
        type: object
        properties:
          file:
            type: string
            example: "httpdialog.au3"
          error:
            type: string
            example: ""
            description: "error message if there is any error in uploading file. If file upload is success, then it will empty"

    ListPreRunResponse_data:
        type: object
        properties:
          name:
            type: string
            example: "dialog_disable"
            description: "Name of the pre run"
          last_modified_at:
            type: string
            example: "2020-08-02T06:46:08Z"
          size:
            type: number
            example: 104
            description: "file size"
          capability_url:
            type: string
            example: "lambda:dialog_disable/pre/httpdialog.au3"
            description: "capability url"
          file_path:
            type: string
            example: "dialog_disable/pre/httpdialog.au3"
            description: "path of the file in lambda storage"

    DeletePrerunPayload:
        type: object
        required:
          - file_path
        properties:
          file_path:
            type: string
            example: "dialog_disable/pre/httpdialog.au3"
            description: "file path of pre run file in our lambda storage. To delete a pre run,
              you can either specify pre_run or post_run file path. You can get file_path from the GET /files API"

    ValidatePrerunPayload:
        type: object
        required:
          - file_path
        properties:
          file_path:
            type: string
            example: "dialog_disable/pre/httpdialog.au3"
            description: "file path of pre run file in our lambda storage. You can get file_path from the GET /files API"


    DownloadPrerunPayload:
        type: object
        required:
          - file_path
        properties:
          file_path:
            type: string
            example: "dialog_disable/pre/httpdialog.au3"
            description: "file path of pre run file in our lambda storage. You can get file_path from the GET /files API"



    DeletePrerunResponse:
        type: object
        properties:
          message:
            type: string
            example: "File have been successfully deleted from our lambda storage"
          status:
            type: string
            example: "success"
    UploadPrerunPayload:
        type: object
        required:
          - pre_run_file
          - name
          - post_run_file
        properties:
          pre_run_file:
            type: string
            format: binary
            description: "If your script requires some reference to other file that needs to be present in our machines then you can upload
            multiple pre_run_file and download those files in your script using download API"
          name:
            type: string
            example: "MicrosoftEdgeZoom"
            description: "Name of your pre run executable"
          post_run_file:
            type: string
            format: binary
            description: "script file that will revert the actions performed by pre run file. If there is no post action that needs to performed then
            you can upload an empty file"
    CreatePrerunResponse:
        properties:
          data:
            type: array
            items:
              $ref: '#/components/schemas/UploadPrerunResposeData'
          message:
            type: string
            example: "Files have been uploaded successfully to our lambda storage"
          status:
            type: string
            example: "success"

    ListUserFileResponse:
      required:
        - Meta
        - data
      properties:
        Meta:
          $ref: '#/components/schemas/ListUserFileResponse_Meta'
        data:
          type: array
          items:
            $ref: '#/components/schemas/ListUserFileResponse_data'

    ListExtensionResponse:
      required:
        - Meta
        - data
      properties:
        Meta:
          $ref: '#/components/schemas/ListExtensionResponse_Meta'
        data:
          type: array
          items:
            $ref: '#/components/schemas/ListExtensionResponse_data'

    ListExtensionResponse_Meta:
      type: object
      properties:
        org_id:
          type: number
          example: 12345

        total:
          type: number
          example: 1


    ListExtensionResponse_data:
      type: object
      properties:
        key:
          type: string
          example: "extension_1.zip"
          description: "Name of the extension"
        last_modified_at:
          type: string
          example: "2020-08-02T06:46:08Z"
        size:
          type: number
          example: 104
          description: "file size"
        s3_url:
          type: string
          example: https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-123456/extension_1.zip
          description: "url of the uploaded extension"

    ListBrowserProfileResponse:
      required:
        - Meta
        - data
      properties:
        Meta:
          $ref: '#/components/schemas/ListBrowserProfileResponse_Meta'
        data:
          type: array
          items:
            $ref: '#/components/schemas/ListBrowserProfileResponse_data'

    ListBrowserProfileResponse_Meta:
      type: object
      properties:
        org_id:
          type: number
          example: 12345

        total:
          type: number
          example: 1


    ListBrowserProfileResponse_data:
      type: object
      properties:
        key:
          type: string
          example: "Profile 1.zip"
          description: "Name of the browser profile"
        last_modified_at:
          type: string
          example: "20202-04-02T06:46:08Z"
        size:
          type: number
          example: 104
          description: "file size"
        url:
          type: string
          example: https://automation-prod-user-files.s3.amazonaws.com/profile/chrome/orgId-123456/Profile 1.zip
          description: "url of the uploaded browser profile"

    UploadExtensionPayload:
      type: object
      required:
        - extensions
      properties:
        extensions:
          type: string
          format: binary

    UploadExtensionResponseData:
      type: object
      properties:
        error:
          type: string
          example: ""
          description: "error message if there is any error in uploading file. If file upload is success, then it will empty"
        s3_url:
          type: string
          example: "https://automation-prod-user-files.s3.amazonaws.com/extensions/orgId-123456/extension_1.zip"
        message:
          type: string
          example: "File have been uploaded successfully to our lambda storage"

    UploadBrowserProfilePayload:
      type: object
      required:
        - profile
      properties:
        profile:
          type: string
          format: binary

    UploadBrowserProfileResponseData:
      type: object
      properties:
        error:
          type: string
          example: ""
          description: "error message if there is any error in uploading file. If file upload is success, then it will empty"
        url:
          type: string
          example: "https://automation-prod-user-files.s3.amazonaws.com/profile/chrome/orgId-123456/Profile 1.zip"
        message:
          type: string
          example: "File have been uploaded successfully to our lambda storage"

    DeleteExtensionPayload:
      type: object
      required:
        - key
      properties:
        key:
          type: string
          example: "extension_1.zip"

    DeleteExtensionResponse:
      type: object
      properties:
        message:
          type: string
          example: "File have been successfully deleted from our lambda storage"
        status:
          type: string
          example: "success"

    DeleteBrowserProfilePayload:
      type: object
      required:
        - key
      properties:
        key:
          type: string
          example: "Profile 1.zip"

    DeleteBrowserProfileResponse:
      type: object
      properties:
        message:
          type: string
          example: "File have been successfully deleted from our lambda storage"
        status:
          type: string
          example: "success"

    ListUserFileResponse_Meta:
      type: object
      properties:
        org_id:
          type: number
          example: 12345

        total:
          type: number
          example: 1

    ListUserFileResponse_data:
      type: object
      properties:
        key:
          type: string
          example: "file_example_JPG_2500kB.jpg"
          description: "Name of the file"
        last_modified_at:
          type: string
          example: "2020-08-02T06:46:08Z"
        size:
          type: number
          example: 104
          description: "file size"
    # TODO check multiple files from swagger
    UploadUserFilePayload:
      type: object
      required:
        - files
      properties:
        files:
          type: string
          format: binary

    UploadUserFilesResposeData:
      type: object
      properties:
        file:
          type: string
          example: "file_example_JPG_2500kB.jpg"
        error:
          type: string
          example: ""
          description: "error message if there is any error in uploading file. If file upload is success, then it will empty"
        message:
          type: string
          example: "File have been uploaded successfully to our lambda storage"


    UploadTerminalFilePayload:
      type: object
      required:
        - files
      properties:
        file:
          type: string
          format: binary

    UploadTerminalFileResposeData:
      type: object
      properties:
        data:
          type: string
          example: "File have been uploaded successfully to our lambda storage"
        status:
          type: string
          example: "success"

    UploadExceptionLog:
      type: object
      properties:
        exception:
          type: array
          items:
            type: string
          example:  ["exception 1", "exception 2", "expection 3"]

    DeleteUserFilePayload:
      type: object
      required:
        - key
      properties:
        key:
          type: string
          example: "file_example_JPG_2500kB.jpg"


    DeleteUserFileResponse:
      type: object
      properties:
        message:
          type: string
          example: "File have been successfully deleted from our lambda storage"
        status:
          type: string
          example: "success"


    DownloadUserFilePayload:
      type: object
      required:
        - key
      properties:
        key:
          type: string
          example: "file_example_JPG_2500kB.jpg"


    DownloadUserFilePageNotFound:
      type: object
      properties:
        message:
          type: string
          example: "Error in downloading file from lambda storage"
        status:
          type: string
          example: "fail"

    LighthouseReportResponse:
      type: object
      properties:
        message:
          type: string
          example: Retrieve Lighthouse Report data was successful.
        status:
          type: string
          example: success
        data:
          type: string

    GetOrgConcurrency:
      type: object
      properties:
        data:
          type: object
          properties:
            queued:
              type: integer
              example: 100
            running:
              type: integer
              example: 100
        status:
          type: string
          example: "success"

    GetResolutions:
        type: object
        properties:
            resolutions:
                type: object
                properties:
                    BigSur:
                        type: array
                        items:
                          type: string
                        example: ["1024x768", "1280x960", "1280x1024"]
                    Catalina:
                        type: array
                        items:
                          type: string
                        example: ["1024x768", "1280x960", "1280x1024"]
                    Windows11:
                        type: array
                        items:
                          type: string
                        example: ["1024x768", "1280x800", "1280x1024"]
                    Windows10:
                        type: array
                        items:
                          type: string
                        example: ["1024x768", "1280x800", "1280x1024",]
            message:
                type: string
                example: "Resolutions are retrieved successfully"
            status:
                type: string
                example: "success"
    GetGeolocationIps:
        properties:
            data:
                type: object
                properties:
                    in:
                        type: array
                        items:
                            type: string
                        example: [ "0.0.0.0", "0.0.0.0", "0.0.0.0" ]
                    us:
                        type: array
                        items:
                            type: string
                        example: [ "0.0.0.0", "0.0.0.0" ]
            message:
                type: string
                example: Geolocation IP fetched successfully
            status:
                type: string
                example: success


    AutohealedCommandsResponse:
      type: object
      properties:
        status:
          type: string
          example: "success"
        message:
          type: string
          nullable: true
          example: null
        data:
          $ref: '#/components/schemas/AutohealedCommandsData'

    AutohealedCommandsData:
      type: object
      properties:
        total_healed_commands:
          type: integer
          description: Total number of autohealed commands found
          example: 11
        test_id:
          type: string
          description: The test ID for which autohealed commands were fetched
          example: "DA-WIN-160849-1756966096614912604KKM"
        healed_commands:
          type: array
          description: Array of autohealed command details
          items:
            $ref: '#/components/schemas/AutohealedCommand'

    AutohealedCommand:
      type: object
      properties:
        request_id:
          type: string
          description: Unique request identifier for the command
          example: "LT01K49NG343J2YDNEQ60HQVQY13-6NSZV-US-EAST-1"
        test_id:
          type: string
          description: Test identifier
          example: "DA-WIN-160849-1756966096614912604KKM"
        original_locator:
          $ref: '#/components/schemas/LocatorData'
        healed_locator:
          $ref: '#/components/schemas/LocatorData'
        duration:
          type: integer
          description: Time taken to heal the locator in milliseconds
          example: 349

    LocatorData:
      type: object
      properties:
        using:
          type: string
          description: The locator strategy used (e.g., css selector, xpath, id)
          example: "css selector"
        value:
          type: string
          description: The actual locator value
          example: "input.custom-checkbox.ng-pristine.ng-untouched.ng-valid.ng-empty"

    BadRequest:
      type: object
      properties:
        status:
          type: string
          example: "fail"
        message:
          type: string
          example: "Invalid limit parameter"
        data:
          type: object
          nullable: true
          example: null

    Unauthorized:
      type: object
      properties:
        status:
          type: string
          example: "fail"
        message:
          type: string
          example: "Unauthorized"
        data:
          type: object
          nullable: true
          example: null

    NotFound:
      type: object
      properties:
        status:
          type: string
          example: "fail"
        message:
          type: string
          example: "Test not found"
        data:
          type: object
          nullable: true
          example: null

    InternalServerError:
      type: object
      properties:
        status:
          type: string
          example: "error"
        message:
          type: string
          example: "Failed to fetch autohealed data"
        data:
          type: object
          nullable: true
          example: null

  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```

---


## 2. Automated Screenshots API

**File:** `automated-screenshots.yaml` | **Size:** 21406 bytes | **Lines:** 749

```yaml
openapi: 3.0.0
info:
  title: TestMu AI Screenshots API Documentation
  version: 1.0.1
servers:
  - url: "https://api.lambdatest.com/screenshots/v1"
  - url: "https://eu-api.lambdatest.com/screenshots/v1"

paths:
  /os-browsers:
    get:
      tags:
        - Get OS-Browsers
      summary: Fetch all available os-browser combinations.
      description: Fetch all os browsers combinations available on lambdatest platform.
      operationId: os-browsers
      parameters:
        - name: os
          in: query
          description: Fetch details for a particular OS
          schema:
            type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/os-browsers"
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AccessDenied"
      security:
        - basicAuth: []
  /devices:
    get:
      tags:
        - Get Devices
      summary: Fetch all available device combinations.
      description: Fetch all os devices combinations available on lambdatest platform.
      operationId: devices
      parameters:
        - name: os
          in: query
          description: Fetch details for a particular OS
          schema:
            type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/os-devices"
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AccessDenied"
      security:
        - basicAuth: []
  /resolutions:
    get:
      tags:
        - Get Resolutions
      summary: Fetch all available resolution on different OS.
      description: Fetch all available resolution on different OS.
      operationId: Resolutions
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/resolutions"
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AccessDenied"
      security:
        - basicAuth: []
  /{test_id}:
    get:
      tags:
        - Get Screenshots
      summary: Fetch specified screenshot details.
      description: To fetch specified screenshot details.
      operationId: screenshots
      parameters:
        - name: test_id
          in: path
          description: Test ID that details you want to fetch
          required: true
          style: simple
          explode: false
          schema:
            type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/screenshot-details"
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AccessDenied"
        403:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Forbidden"
        404:
          description: Resource not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/screenshot-not-found"
      security:
        - basicAuth: []
  /{test_id}/zip:
    get:
      tags:
        - Get Zipped Screenshots
      summary: Fetch Zipped Screenshots
      description: Fetch Zipped Screenshots
      operationId: ZippedScreenshots
      parameters:
        - name: test_id
          in: path
          description: Test ID that Zipped Screenshots you want to fetch
          required: true
          style: simple
          explode: false
          schema:
            type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/zipped-screenshots-success"
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AccessDenied"
        403:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Forbidden"
        404:
          description: Resource not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/screenshot-not-found"
      security:
        - basicAuth: []
  /profiles:
    get:
      tags:
        - Get Profiles
      summary: Fetch login profiles
      description: Fetch login profiles
      operationId: Profiles
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/profiles"
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AccessDenied"
      security:
        - basicAuth: []
  /locations:
    get:
      tags:
        - Get Locations
      summary: Fetch Locations
      description: Fetch list of available Geolocations
      operationId: Locations
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/locations"
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AccessDenied"
      security:
        - basicAuth: []
  /:
    post:
      tags:
        - Start Screenshot Test
      summary: Start Screenshot Test
      description: Start Screenshot Test
      operationId: Start Screenshot Test
      requestBody:
        description: start screenshot test payload.
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/screenshot-payload"
            examples:
              objectExample:
                $ref: "#/components/examples/objectExample"
              objectExample2:
                $ref: "#/components/examples/objectExample2"
              objectExample3:
                $ref: "#/components/examples/objectExample3"
              objectExample4:
                $ref: "#/components/examples/objectExample4"
              objectExample5:
                $ref: "#/components/examples/objectExample5"
              objectExample6:
                $ref: "#/components/examples/objectExample6"
        required: true
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/start-screenshot-success"
        400:
          description: Bad Request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/start-screenshot-bad-request"
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AccessDenied"
        403:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Forbidden"
      security:
        - basicAuth: []
  /stop/{test_id}:
    put:
      tags:
        - Stop Screenshot Test
      summary: Stop specified screenshot test
      description: Stop specified screenshot test
      operationId: stop screenshots test
      parameters:
        - name: test_id
          in: path
          description: Test ID that details you want to stop
          required: true
          style: simple
          explode: false
          schema:
            type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/stop-screenshot-success"
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/AccessDenied"
        403:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Forbidden"
        404:
          description: Resource not found
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/stop-screenshot-not-found"
      security:
        - basicAuth: []

components:
  schemas:
    os-browsers:
      properties:
        windows 10:
          $ref: "#/components/schemas/browsers"
        macos mojave:
          $ref: "#/components/schemas/browsers"

    os-devices:
      properties:
        ios 12.0:
          $ref: "#/components/schemas/ios-12.0"
        android 7.0:
          $ref: "#/components/schemas/android-7.0"

    ios-12.0:
      type: object
      properties:
        devices:
          type: array
          items:
            type: string
          example: ["iphone xr", "iphone xs", "iphone xs max"]
    android-9.0:
      type: object
      properties:
        devices:
          type: array
          items:
            type: string
          example: ["galaxy s9 plus"]
    android-7.0:
      type: object
      properties:
        devices:
          type: array
          items:
            type: string
          example:
            [
              "galaxy j7 max",
              "galaxy s8",
              "galaxy s8+",
              "galaxy tab s3 9.3",
              "huawei honor 6x",
              "nexus 5x",
              "nexus 6p",
              "oppo r9",
            ]
    browsers:
      type: object
      properties:
        chrome:
          type: array
          items:
            type: string
          example: ["76", "75"]
        firefox:
          type: array
          items:
            type: string
          example: ["67", "66"]
        opera:
          type: array
          items:
            type: string
          example: ["55", "54"]
    resolutions:
      properties:
        mac_res:
          $ref: "#/components/schemas/res_list"
        win_res:
          $ref: "#/components/schemas/res_list"
    res_list:
      type: array
      items:
        type: string
      example: ["1024x768", "1280x1024"]
    profiles:
      type: object
      properties:
        profiles:
          type: array
          items:
            type: object
            properties:
              name:
                type: string
                example: "lambda-login"
              profile_config:
                type: object
                properties:
                  credentials:
                    type: object
                    properties:
                      password:
                        type: string
                        example: "password"
                      username:
                        type: string
                        example: "name"
                  locators:
                    type: object
                    properties:
                      password:
                        type: object
                        properties:
                          type:
                            type: string
                            example: "name"
                          value:
                            type: string
                            example: "password"
                      submit:
                        type: object
                        properties:
                          type:
                            type: string
                            example: "css"
                          value:
                            type: string
                            example: "button.btn-lg"
                      username:
                        type: object
                        properties:
                          type:
                            type: string
                            example: "name"
                          value:
                            type: string
                            example: "email"
                  login_url:
                    type: string
                    example: "https://accounts.lambdatest.com/login"
                  profile_name:
                    type: string
                    example: "lambda-login"
    locations:
      type: object
      properties:
        locations:
          type: array
          items:
            type: object
            properties:
              code:
                type: string
                example: "US"
              name:
                type: string
                example: "United States"

    zipped-screenshots-success:
      type: object
      properties:
        url:
          type: string
          example: https://s3-screenshots.s3.amazonaws.com/screenshots/TES1009632231568637527345629.zip
    screenshot-details:
      $ref: "#/components/schemas/screenshot-test-response"
    screenshot-test-response:
      type: object
      properties:
        test_id:
          type: string
          example: "TES100968331562237283314836"
        defer_time:
          type: number
          example: 5
        test_status:
          type: string
          example: "completed"
        url:
          type: string
          example: "https://www.lambdatest.com"
        callback_url:
          type: string
          example: "https://www.example.com"
        screenshots:
          type: array
          items:
            $ref: "#/components/schemas/screenshot-type"
    screenshot-type:
      type: object
      properties:
        os:
          type: string
          example: "windows 10"
        browser:
          type: string
          example: "chrome"
        browser_version:
          type: string
          example: "76"
        status:
          type: string
          example: "completed"
        screenshot_url:
          type: string
          example: "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png"
        thumbnail_url:
          type: string
          example: "https://s3.amazonaws.com/s3-screenshots/prod/ACT100968331562237283340194/screenshot/win-cr-76.0.png"
        activity_id:
          type: string
          example: "ACT100968331562237283340194"
        resolution:
          type: string
          example: "1024x768"
    screenshot-not-found:
      properties:
        message:
          type: string
          example: "No data found"
        reason:
          type: string
          example: "test_id is invalid"
    stop-screenshot-success:
      properties:
        message:
          type: string
          example: "Test stopped successfully"
    stop-screenshot-not-found:
      properties:
        message:
          type: string
          example: "No active Screenshot test found for this test_id"
    screenshot-payload:
      type: object
      properties:
        url:
          type: string
          example: https://www.lambdatest.com
        defer_time:
          type: number
          example: 5
        email:
          type: boolean
          example: true
        mac_res:
          type: string
          example: 1024x768
        win_res:
          type: string
          example: 1366X768
        tunnel:
          type: boolean
          example: true
        tunnel_identifier:
          type: string
          example: tunnel
        username:
          type: string
          example: admin
        password:
          type: string
          example: password
        callback_url:
          type: string
          example: https://www.example.com
        configs:
          type: object
          properties:
            windows 10:
              $ref: "#/components/schemas/browsers"
            macos mojave:
              $ref: "#/components/schemas/browsers"
    start-screenshot-success:
      type: object
      properties:
        test_id:
          type: string
          example: TES100968331562243938913767
    start-screenshot-bad-request:
      type: object
      properties:
        message:
          type: string
          example: The os, browser, browser_version combination is either unsupported or doesn't exist. Please try again with a different combination.

    AccessDenied:
      properties:
        message:
          type: string
          example: "Unauthorized"
    Forbidden:
      properties:
        message:
          type: string
          example: "Screenshot API is supported only in our premium plans. Please upgrade."
  examples:
    objectExample:
      value:
        url: "https://www.lambdatest.com"
        defer_time: 5
        email: true
        mac_res: "1024x768"
        win_res: "1366X768"
        smart_scroll: true
        layout: "portrait"
        configs:
          windows 10:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
            opera: ["58", "57"]
            ie: ["11"]
          macos mojave:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
            opera: ["58", "57"]
            safari: ["12"]
          ios 12.0:
            devices: ["iphone xr", "iphone xs", "iphone xs max"]
          android 9.0:
            devices: ["galaxy s9 plus"]
      summary: Screenshot Test
    objectExample2:
      value:
        url: "https://www.lambdatest.com"
        defer_time: 5
        email: true
        smart_scroll: true
        tunnel: true
        mac_res: "1024x768"
        win_res: "1366X768"
        layout: "portrait"
        configs:
          windows 10:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
            opera: ["58", "57"]
            ie: ["11"]
          macos mojave:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
            opera: ["58", "57"]
            safari: ["12"]
          ios 12.0:
            devices: ["iphone xr", "iphone xs", "iphone xs max"]
          android 9.0:
            devices: ["galaxy s9 plus"]
      summary: Screenshot Test with Tunnel
    objectExample3:
      value:
        url: "https://httpbin.org/basic-auth/username/password"
        defer_time: 5
        email: true
        smart_scroll: true
        mac_res: "1024x768"
        win_res: "1366X768"
        username: "username"
        password: "password"
        layout: "portrait"
        configs:
          windows 10:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
            opera: ["58", "57"]
            ie: ["11"]
          macos mojave:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
            opera: ["58", "57"]
          ios 12.0:
            devices: ["iphone xr", "iphone xs", "iphone xs max"]
          android 9.0:
            devices: ["galaxy s9 plus"]
      summary: Screenshot Test with Basic Authentication
    objectExample4:
      value:
        url: "https://www.lambdatest.com"
        defer_time: 5
        email: true
        mac_res: "1024x768"
        win_res: "1366X768"
        callback_url: "https://www.example.com"
        configs:
          windows 10:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
            opera: ["58", "57"]
            ie: ["11"]
          macos mojave:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
            opera:
          ios 12.0:
            devices: ["iphone xr", "iphone xs", "iphone xs max"]
          android 9.0:
            devices: ["galaxy s9 plus"]
      summary: Screenshot Test with Callback Url
    objectExample5:
      value:
        url: "https://www.lambdatest.com"
        defer_time: 5
        email: true
        mac_res: "1024x768"
        win_res: "1366X768"
        profile_id: "lambda-login"
        configs:
          windows 10:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
            opera: ["58", "57"]
            ie: ["11"]
          macos mojave:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
      summary: Screenshot Test with Login
  
    objectExample6:
      value:
        url: "https://www.lambdatest.com"
        defer_time: 5
        email: true
        mac_res: "1024x768"
        win_res: "1366X768"
        country_code: "US"
        configs:
          windows 10:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
            opera: ["58", "57"]
            ie: ["11"]
          macos mojave:
            chrome: ["76", "75"]
            firefox: ["67", "66"]
      summary: Screenshot Test with Geolocation

  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```

---


## 3. App Automation API (Real Devices)

**File:** `app-automation-real-devices.yaml` | **Size:** 71922 bytes | **Lines:** 2370

```yaml
openapi: 3.0.0
info:
  title: TestMu AI Real Device App automation API Documentation
  version: '2.1'
servers:
#- url: https://virtserver.swaggerhub.com/faisal097/ltma16mar19/1.0.1
#-  description: SwaggerHub API Auto Mocking
#- url: '{protocol}://mobile-api.lambdatest.com/mobile-automation/api/v1/'
- url: 'https://manual-api.lambdatest.com'
  description: 'Server 1'
- url: 'https://eu-manual-api.lambdatest.com'
  description: 'Server 1 eu'
- url: 'https://mobile-api.lambdatest.com/mobile-automation/api/v1'
  description: 'Server 2'
- url: 'https://eu-mobile-api.lambdatest.com/mobile-automation/api/v1'
  description: 'Server 2 eu'
- url: 'https://mobile-api.lambdatest.com'
  description: 'Server 3'
- url: 'https://eu-mobile-api.lambdatest.com'
  description: 'Server 3 eu'
- url: 'https://api.lambdatest.com'
  description: 'Server 4' 
  
  variables:
    protocol:
      default: https
      enum:
      - https

paths:
  /app/uploadFramework:
    post:
      tags:
        - Application (Espresso/XCUI)
      summary: Upload a framework file for testing(Espresso/XCUI) (Server 1)
      description: Upload a framework file for testing purposes. Supports Espresso for Android and XCUITest for iOS.
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                appFile:
                  type: string
                  format: binary
                  description: The application file to be uploaded.
                type:
                  type: string
                  enum: [xcuit-ios, espresso-android]
                  description: The type of the application (XCUITest for iOS, Espresso for Android).
                name:
                  type: string
                  description: Name of the application.
              required:
                - appFile
                - type
      responses:
        '200':
          description: Successfully uploaded the framework.
          content:
            application/json:
              schema:
                type: object
                properties:
                  app_id:
                    type: string
                    example: "lt://APP1016038711693231735315475"
                  name:
                    type: string
                  type:
                    type: string
                  url:
                    type: string
        '401':
          description: Unauthorized access. Authentication required.
        '415':
          description: Unsupported media type. Ensure the provided file format is valid.
        '500':
          description: Internal server error. Please try again later.
  
      security:
        - basicAuth: []
  
        
  /app/upload/realDevice:
    post:
      tags:
        - Application (Appium)
      summary: Upload Application to a Real Device (Server 1)
      description: Upload an application (.ipa,.apk,.aab) for testing on a real device.
      operationId: uploadAppRealDevice
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                appFile:
                  type: string
                  format: binary
                  description: Path to the application file on your local system.
                name:
                  type: string
                  description: Name of the application.
                custom_id:
                  type: string
                  description: Custom ID of the application.
                visibility:
                  type: string
                  enum: ['individual', 'team']
                  default: 'individual'
                  description: Visibility scope of the uploaded application.
              required:
                - appFile
                - name
      responses:
        '200':
          description: Application successfully uploaded for testing.
          content:
            application/json:
              schema:
                type: object
                properties:
                  app_id:
                    type: string
                  name:
                    type: string
                  type:
                    type: string
                  app_url:
                    type: string
                  url:
                    type: string
                  custom_id:
                    type: string
              example:
                app_id: "APP10160502401693989036908244"
                name: "Appname"
                type: "android"
                app_url: "lt://APPID"
                url: "APP_URL"
                custom_id: "Custom"
        '401':
          description: Unauthorized access. Authentication required.
        '415':
          description: Unsupported media type. Ensure the provided file format is valid.
        '500':
          description: Internal server error. Please try again later.
      security:
        - basicAuth: []

  /app/data:
    get:
      tags:
        - Application (Appium)
      summary: Fetch all uploaded applications (Server 1)
      description: Fetch all applications based on the provided type (android/iOS) and access level (user/organization).
      operationId: fetchApplications
      parameters:
        - name: type
          in: query
          description: Application type (android/iOS)
          required: true
          schema:
            type: string
            enum: [android, ios]
        - name: level
          in: query
          description: Access level (user/organization)
          required: true
          schema:
            type: string
            enum: [user, org]
        - name: offset
          in: query
          description: Page offset defines the number of records to skip before fetching data. It is used along with the limit to fetch a specific page of data.
          required: false
          style: form
          explode: true
          schema:
            type: integer
        - name: limit
          in: query
          description: To fetch specified number of records. e.g. limit=10
          required: false
          style: form
          explode: true
          schema:
            type: integer
      responses:
        '200':
          description: Successfully retrieved applications.
          content:
            application/json:
              schema:
                type: object
                properties:
                  metaData:
                    type: object
                    properties:
                      type:
                        type: string
                      total:
                        type: integer
                  data:
                    type: array
                    items:
                      type: object
                      properties:
                        app_id:
                          type: string
                        name:
                          type: string
                        type:
                          type: string
                          description: Type of the application (android/iOS).
                        updated_at:
                          type: string
                          format: date-time
                          description: Date and time of the last update.
                        shared:
                          type: boolean
                          description: Indicates if the application is shared.
                        source:
                          type: string
                          description: Source of the application.
        '401':
          description: Unauthorized access. Authentication required.
        '404':
          description: Resource not found.
      security:
          - basicAuth: []

  /app/custom_id/{customId}:
    get:
      tags:
        - Application (Appium)
      summary: Get data by Custom ID (Server 1)
      description: Retrieve data by custom ID from LambdaTest.
      operationId: getDataByCustomId
      parameters:
        - name: customId
          in: path
          description: The custom ID to retrieve data for
          required: true
          schema:
            type: string
        - name: metadataPresent
          in: query
          description: Specify if metadata is present (true or false)
          required: true
          schema:
            type: boolean
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    app_id:
                      type: string
                    source:
                      type: string
                    type:
                      type: string
                      enum: [android, ios]
                      description: Type of the application (android/iOS).
                    url:
                      type: string
                    patched_url:
                      type: string
                    name:
                      type: string
                    custom_id:
                      type: string
                    md5_hash:
                      type: string
                    cf_url:
                      type: string
                    cf_ap_url:
                      type: string
                    cf_patched_url:
                      type: string
                    cf_ap_patched_url:
                      type: string
      security:
        - basicAuth: []

  /app/{appId}/download:
    get:
      tags:
        - Application (Appium)
      summary: Download App by ID (Server 1)
      description: Download the binary of an uploaded application (.apk/.aab/.ipa) using its unique `appId`. The file is streamed back as an attachment.
      operationId: downloadAppById
      parameters:
        - name: appId
          in: path
          description: The unique ID of the application to download (e.g., `APP1016038711693231735315475`).
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Application binary streamed successfully as a file attachment.
          content:
            application/octet-stream:
              schema:
                type: string
                format: binary
        '400':
          description: Bad request. The `appId` is invalid, corrupt, the app no longer exists, or the file is not available.
        '401':
          description: Unauthorized access. Authentication required.
        '500':
          description: Internal server error. Please try again later.
      security:
        - basicAuth: []

  /app/custom_id/{customId}/download:
    get:
      tags:
        - Application (Appium)
      summary: Download App by Custom ID (Server 1)
      description: Download the binary of an uploaded application (.apk/.aab/.ipa) using its `customId`. The file is streamed back as an attachment.
      operationId: downloadAppByCustomId
      parameters:
        - name: customId
          in: path
          description: The custom ID of the application to download.
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Application binary streamed successfully as a file attachment.
          content:
            application/octet-stream:
              schema:
                type: string
                format: binary
        '400':
          description: Bad request. The `customId` is invalid or no app was found for the provided custom ID.
        '401':
          description: Unauthorized access. Authentication required.
        '500':
          description: Internal server error. Please try again later.
      security:
        - basicAuth: []

  /app/delete:
    delete:
      tags:
        - Application (Appium)
      summary: Delete your uploaded applications (Server 1)
      description: Delete the uploaded applications based on the provided appIds.
      operationId: deleteApplications
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                appIds:
                  type: string
                  description: Comma-separated string of App IDs to delete (e.g., "APP1016038711693231735315475")
                  example: "APP1016038711693231735315475,APP2016038711693231735315476"
                  
      responses:
        '200':
          description: Successfully deleted the selected application(s).
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
              example:
                message: "Deleted successfully."
        '401':
          description: Unauthorized access. Authentication required.
        '400':
          description: Bad request. Invalid input or missing parameters.
        default:
          description: An unexpected error occurred.
      security:
        - basicAuth: []


  /app/{appId}:
    delete:
      tags:
        - Application (Appium)
      summary: Delete a single uploaded application (Server 1)
      description: Deletes an uploaded application using its unique `appId`.
      operationId: deleteApplication
      parameters:
        - name: appId
          in: path
          required: true
          description: The ID of the application to delete (e.g., `APP1234567890`).
          schema:
            type: string
      responses:
        '200':
          description: Application deleted successfully.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
              example:
                message: "Deleted successfully."
        '400':
          description: Bad request. Invalid or missing appId.
        '401':
          description: Unauthorized access. Authentication required.
        '404':
          description: Application not found.
        default:
          description: An unexpected error occurred.
      security:
        - basicAuth: []



  /mfs/v1.0/media/list:
    get:
      tags:
        - Media 
      summary: Fetch media list for an organization (server 4)
      description: Retrieve a list of uploaded media files (images, videos, etc.) associated with an organization.
      parameters:
        - name: custom_id
          in: query
          description: The custom ID to retrieve Media.
          required: false
          schema:
            type: string
        - name: type
          in: query
          description: Media type (image/video/doc/cert)
          required: false
          schema:
            type: string
            enum: ['image', 'video','doc', 'cert']
      responses:
        '200':
          description: Successful response containing media list
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    media_url:
                      type: string
                    media_id:
                      type: string
                    name:
                      type: string
                    type:
                      type: string
                      enum: ['image', 'video','doc', 'cert']
                      description: Type of the Media(Image / Video / Doc / Certificate)
                    custom_id:
                      type: string
              example:
                media_url: "Media_URL"
                media_id: "MEDIA12234567890"
                name: "sample.png"
                custom-id: "Sample_Image"
                type: "image"
        '401':
          description: Unauthorized access. Authentication required.
        '415':
          description: Unsupported media type. Ensure the provided file format is valid.
        '500':
          description: Internal server error. Please try again later.
  
      security:
        - basicAuth: []
  

  /mfs/v1.0/media/{media_id}:
    delete:
      tags:
        - Media 
      summary: Delete a media asset (server 4)
      description: Deletes the media files associated with the given `media_id`.
      operationId: deleteMediaByMediaId
      parameters:
        - name: media_id
          in: path
          description: The Media Id to retrieve data for deletion.
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Successfully deleted the selected media(s).
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
              example:
                Status: "Deleted successfully."
        '401':
          description: Unauthorized access. Authentication required.
        '400':
          description: Bad request. Invalid input or missing parameters.
        default:
          description: An unexpected error occurred.
      security:
        - basicAuth: []  
                
  /mfs/v1.0/media/upload/:
    post:
      tags:
        - Media 
      summary: Upload Media File (Image/Video/Document/Certificate) (Server 4)
      description: Upload a media file (.jpg, .png, .mp4, .pdf, etc.) for use.
      operationId: uploadMediaFile
      requestBody:
        required: true
        content:
          multipart/form-data:          
            schema:
              type: object
              properties:
                media_file:
                  type: string
                  format: binary
                  description: The media file to be uploaded.
                type:
                  type: string
                  description: Type of media (e.g., image, video, document, Certificate).
                  enum:
                    - Image
                    - Video
                    - Documents
                    - Certificate
                custom_id:
                  type: string
                  description: Optional custom identifier for later retrieval.
              required:
                - media_file
                - name

      responses:
        '200':
          description: Successfully uploaded the media file.
          content:
            application/json:
              schema:
                type: object
                properties:
                  media_url:
                    type: string
                  name:
                    type: string
                  custom_id:
                    type: string
                  Status: 
                    type: string
              example: 
                media_url: "lt://MEDIA12345"
                name: image.png
                custom_id: Image_1
                Status: Successful
        '401':
          description: Unauthorized access. Authentication required.
        '415':
          description: Unsupported media type. Ensure the provided file format is valid.
        '500':
          description: Internal server error. Please try again later.

      security:
        - basicAuth: []
  


  /list:
    get:
      tags:
        - Devices List
      summary: Fetch available devices for running tests (Server 2)
      description: Retrieves the list of devices available for running tests. You can filter the devices based on the region.
      operationId: getDevices
      parameters:
        - name: region
          in: query
          description: Region to filter available devices ( 'eu', 'us', 'ap')
          required: true
          schema:
            type: string
          example: ap
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DeviceList'
        '400':
          description: Bad Request
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
        '401':
          description: Unauthorized
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
        '404':
          description: Not Found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
        '500':
          description: Internal Server Error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
      security:
        - basicAuth: []
        
  /org/concurrency:
    get:
      tags:
        - Concurrency Details 
      summary: Get your account's concurrency details (Server 2)
      description: Retrieve the concurrency details for your account.
      operationId: getConcurrencyDetails
      responses:
        '200':
          description: Successful operation ()
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ConcurrencyDetails'
        '401':
          description: Access denied. Auth error.
          content:                                        
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
        - basicAuth: []
  
  /mobile-automation/api/v1/fetchpatchedapkurl:
    post:
      tags:
        - Application Processing (Appium)
      summary: Fetch patched APK URL (Server 3)
      description: |
        This endpoint facilitates the retrieval of a patched APK URL and provides information on whether the patching process is complete or not. It is essential for Appium automation and supports testing workflows.
      operationId: fetchpatchedapkurl
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                appId:
                  type: string
                  example: APP1016026831697098627787472
                imageInjectionEnabled:
                  type: boolean
                  example: true
                screenshotUnblockEnabled:
                  type: boolean
                  example: true
        required: true
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              example:
                data:
                  cf_ap_patched_url: ""
                  cf_patched_url: ""
                  imageinjection_ready: false
                  patched_url: ""
                  screenshotunblock_ready: false
                  status: "success"
                status: "success"
        '401':
          description: Unauthorized access. Authentication required.
        '404':
          description: Resource not found.
      security:
          - basicAuth: []

  
        
  
  /framework/v1/espresso/build:
    post:
      tags:
        - Execute Test (Espresso/XCUI)
      summary: Execute espresso test on the LambdaTest platform (Server 3)
      description: |
        This endpoint enables you to execute automated tests using the LambdaTest platform.
      operationId: executeWindowsTest
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                app:
                  type: string
                  description: "The APPID of the uploaded app, usually in the format 'lt://APP_ID'."
                  example: "lt://APPID"
                testSuite:
                  type: string
                  description: "The ID of the uploaded test suite to be executed, usually in the format 'lt://TestSuite_ID'."
                  example: "lt://APPID"
                device:
                  type: array
                  items:
                    type: string
                  description: "List of device identifiers where the test should be executed. e.g., ['Galaxy S21 5G-12', 'iPhone 12']."
                  example:
                    - "Galaxy S21 5G-12"
                queueTimeout:
                  type: integer
                  description: "Maximum time in seconds to wait for devices to be available in the queue. Defaults to 10800 seconds (3 hours)."
                  example: 300
                idleTimeout:
                  type: integer
                  description: "Maximum idle time in seconds before a running test is terminated. Defaults to 150 seconds."
                  example: 120
                deviceLog:
                  type: boolean
                  description: "Enable or disable device log capturing. Defaults to true."
                  example: true
                network:
                  type: boolean
                  description: "Enable or disable network log capturing. Defaults to false."
                  example: true
                build:
                  type: string
                  description: "Name of the build for identification purposes."
                  example: "new build"
                geoLocation:
                  type: string
                  description: "Geo-location setting for the test, specified as a country code. Defaults to 'US'."
                  example: "US"
              required:
                - app
                - testSuite
                - device
                - queueTimeout
                - idleTimeout
                - deviceLog
                - network
                - build
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: array
                    items:
                      type: string
                  buildId:
                    type: array
                    items:
                      type: string
                  message:
                    type: array
                    items:
                      type: string
              examples:
                success:
                  value:
                    status: ["Success"]
                    buildId: ["1395514"]
                    message: [""]
                failed:
                  value:
                    status: ["Failed"]
                    buildId: [""]
                    message: ["Failed : [INVALID_APP_ID] The app_id %s specified in the ‘app’ params is invalid. Please specify a valid app_id that was returned in the response to upload app API request and try again., AppId : lt://APPID"]
        '401':
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                    example: "error"
                  message:
                    type: string
                    example: "Unauthorized"
      security:
        - basicAuth: []

  /framework/v1/xcui/build:
    post:
      tags:
        - Execute Test (Espresso/XCUI)
      summary: Execute XCUI test on the LambdaTest platform (Server 3)
      description: Execute the automation tests on Lambdatest platform using the provided parameters.
      operationId: executeTest
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                app:
                  type: string
                  description: Uploaded app's APPID
                  example: "lt://APPID"
                testSuite:
                  type: string
                  description: Uploaded test suite's ID
                  example: "lt://APPID"
                device:
                  type: array
                  items:
                    type: string
                  description: Device(s) to execute the test on
                  example:
                    - "Galaxy S21 5G-12"
                queueTimeout:
                  type: integer
                  description: Queue timeout value in seconds
                  example: 300
                idleTimeout:
                  type: integer
                  description: Idle timeout value in seconds
                  example: 120
                devicelog:
                  type: boolean
                  description: Enable or disable device logs
                  example: true
                network:
                  type: boolean
                  description: Enable or disable network logs
                  example: true
                build:
                  type: string
                  description: Build name
                  example: "new build"
              required:
                - app
                - testSuite
                - device
                - queueTimeout
                - idleTimeout
                - devicelog
                - network
                - build
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: array
                    items:
                      type: string
                  buildId:
                    type: array
                    items:
                      type: string
                  message:
                    type: array
                    items:
                      type: string
              examples:
                success:
                  value:
                    status: ["Success"]
                    buildId: ["1395514"]
                    message: [""]
                failed:
                  value:
                    status: ["Failed"]
                    buildId: [""]
                    message: ["Failed : [INVALID_APP_ID] The app_id %s specified in the ‘app’ params is invalid. Please specify a valid app_id that was returned in the response to upload app API request and try again., AppId : lt://APPID"]
        '401':
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                    example: "error"
                  message:
                    type: string
                    example: "Unauthorized"
      security:
        - basicAuth: []


  /metadata/{session_id}/details:
    get:
      tags:
        - Session
      summary: Fetch the app URL for a particular session (Server 2)
      description: Retrieve the app URL being used for a specific session.
      operationId: getAppUrlForSession
      parameters:
        - name: session_id
          in: path
          description: ID of the session
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AppUrlResponse'
        '401':
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
        - basicAuth: []


  
  /builds:
    get:
      tags:
      - Build
      summary: Fetch all builds of an account. (Server 2)
      description: Fetch all builds of an account. You can limit the number of records and apply filter on status,build date range and sort by users,start date and end date in asc and desc order. You can apply sort on multiple columns.
      operationId: builds
      parameters:
      - name: offset
        in: query
        description: It defines the number of lists on the basis of limit parameter. e.g offset=10
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: limit
        in: query
        description: To fetch specified number of records. e.g. limit=10
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: status
        in: query
        description: To fetch the list of builds with specific status. You can pass multiple comma seperated status e.g. running,queued,completed,timeout and error.
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: fromdate
        in: query
        description: To fetch the list of builds that executed from the specified Start Date. The Date format must be YYYY-MM-DD. e.g. "2018-03-15".
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: todate
        in: query
        description: To fetch the list of builds that executed till the specified End Date. If both fromdate and todate value provided then it works as range filter. The Date format must be YYYY-MM-DD. e.g. "2018-03-15".
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: sort
        in: query
        description: To sort the list in ascending or descending order using multiple keys. e.g. "asc.user_id"
        required: false
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListBuildResponse'
        400:
          description: Invalid session id value
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /builds/{build_id}:
    get:
      tags:
      - Build
      summary: Fetch specified build details (Server 2)
      description: To fetch build details of the buildid specified by the user.
      operationId: singlebuild
      parameters:
      - name: build_id
        in: path
        description: Build ID that details you want to fetch
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SingleBuildResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: Resource not found
      security:
      - basicAuth: []
    delete:
      tags:
      - Build
      summary: Delete Build (Server 2)
      description: To delete specified Build from dashboard.
      operationId: status_ind
      parameters:
      - name: build_id
        in: path
        description: Build ID that need to be deleted
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DeleteBuildResponse'
        400:
          description: Invalid build id value
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
    patch:
      tags:
      - Build
      summary: Update Build Name (Server 2)
      description: To change build name.
      operationId: build_id
      parameters:
      - name: build_id
        in: path
        description: build id that name need to be changed.
        required: true
        style: simple
        explode: false
        schema:
          type: string
      requestBody:
        description: Updated Build Name
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/EditBuild'
        required: true
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/EditBuildResponse'
        400:
          description: Bad Request
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
        
  /builds/{build_id}/stop:
    put:
      tags:
        - Build
      summary: Stop a running build (server 2)
      description: Stops the execution of a running build using its `build_id`.
      parameters:
        - name: build_id
          in: path
          required: true
          description: The ID of the build to stop.
          schema:
            type: integer
      requestBody:
        required: false
        content:
          application/json:
            schema:
              type: object
      security:
        - basicAuth: []
      responses:
        '200':
          description: Build stopped successfully.
        '401':
          description: Unauthorized. Invalid or missing authentication.
        '404':
          description: Build ID not found.
        '409':
          description: Stop request already in progress.
        '500':
          description: Internal server error.

  
  

  /sessions:
    get:
      tags:
      - Session
      summary: Fetch list of all sessions (Server 2)
      description: To fetch list of sessions. You can also limit the number of records, and paginate through your data using Parameters.
      operationId: sessions
      parameters:
      - name: build_id
        in: query
        description: To filter sessions of specific build.
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: username
        in: query
        description: To filter sessions of specific user.
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: offset
        in: query
        description: It defines the number of lists on the basis of limit parameter. e.g offset=10
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: limit
        in: query
        description: To fetch specified number of records. e.g. limit=10
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: status
        in: query
        description: To fetch the list of sessions with specific status. You can pass multiple comma seperated status e.g. queued,completed,passed,failed,timeout,error and lambda error.
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: fromdate
        in: query
        description: To fetch the list of sessions that executed from the specified Start Date. The Date format must be YYYY-MM-DD. e.g. "2018-03-15".
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: todate
        in: query
        description: To fetch the list of sessions that executed till the specified End Date. If both fromdate and todate value provided then it works as range filter. The Date format must be YYYY-MM-DD. e.g. "2018-03-15".
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: sort
        in: query
        description: To sort the list in ascending or descending order using multiple keys. e.g. "asc.user_id,desc.duration"
        required: false
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListsTestsResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: Not Found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
  /sessions/{session_id}:
    get:
      tags:
      - Session
      summary: session specific information (Server 2)
      description: To fetch specified session details such as name, status,os,browser,version and all generated logs endpoint.
      parameters:
      - name: session_id
        in: path
        description: SESSION ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Session'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: Resource associated to session_id is not available.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
    delete:
      tags:
      - Session
      summary: Delete test session (Server 2)
      description: Delete a session.
      parameters:
      - name: session_id
        in: path
        description: SESSION ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionDeleteSuccess'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        403:
          description: Forbidden! Operation not allowed.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionForbidden'
        404:
          description: Resource associated to session_id is not available.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []
    patch:
      tags:
      - Session
      summary: Update session name and status. (Server 2)
      description: To update the test session name and status {"passed","failed"}.
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      requestBody:
        description: You can update both name and status of a session in single request.
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UpdateSessionPayload'
        required: true
      responses:
        200:
          description: successful operation.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionUpdateSuccess'
        400:
          description: Bad Request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionBadResquest'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        403:
          description: Forbidden! Operation not allowed.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionForbidden'
        404:
          description: Resource associated to session_id is not available.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []


  # /sessions/{session_id}/screenshots:
  #   get:
  #     tags:
  #     - Session
  #     summary: To fetch all step by step screenshots
  #     description: To fetch all the step by step screenshots in zip format.
  #     parameters:
  #     - name: session_id
  #       in: path
  #       description: Session ID
  #       required: true
  #       style: simple
  #       explode: false
  #       schema:
  #         type: string
  #     responses:
  #       200:
  #         description: successful operation
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/ScreenshotResponse'
  #       401:
  #         description: Access denied. Auth error.
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/AccessDenied'
  #       404:
  #         description: session id not found
  #         content:
  #           application/json:
  #             schema:
  #               $ref: '#/components/schemas/SessionNotFound'
  #     security:
  #     - basicAuth: []
  /sessions/{session_id}/video:
    get:
      tags:
      - Session
      summary: Fetch recorded video of a test session id. (Server 2)
      description: To fetch video of a recorded test session.
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/VideoResponse'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
        404:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
      security:
      - basicAuth: []

  /sessions/{session_id}/log/command:
    get:
      tags:
      - Session
      summary: command logs of a test session (Server 2)
      description: To fetch the all executed commands of a test session in plain json text.
      operationId: session
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      - name: pageoffset
        in: query
        description: Page offset defines the number of records to skip, based on the limit parameter, to fetch a specific page of data. e.g pageoffset=10
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: limit
        in: query
        description: To fetch specified number of records. e.g. limit=10
        required: false
        style: form
        explode: true
        schema:
          type: integer
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/LogResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
      
  /sessions/{session_id}/log/appium:
    get:
      tags:
      - Session
      summary: appium log of a test session (Server 2)
      description: To fetch appium log that contains grid requests and reponses of a test session in plain json text.
      operationId: session1
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            text/plain:
              schema:
                type: string
                example: "2022-03-14 01:49:55:364 [Appium] Welcome to Appium v1.22.2\n2022-03-14 01:49:55:365 [Appium] Non-default server args:\n2022-03-14 01:49:55:365 [Appium]   port: 0"
                #$ref: '#/components/schemas/SeleniumLogResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
      
  /sessions/{session_id}/log/network:
    get:
      tags:
      - Session
      summary: Network log of a test session (Server 2)
      description: To fetch Network log that contains all the requested urls of a test session in plain json text.
      operationId: session2
      parameters:
      - name: session_id
        in: path
        description: get logs based on session id
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/NetworkLogResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
  /sessions/{session_id}/log/devicelog:
    get:
      tags:
      - Session
      summary: devicelog log of a test session (Server 2)
      description: To fetch devicelog log that contains devicelog errors thrown by application during a test session in plain json text.
      operationId: session3
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: successful operation
          content:
            text/plain:
              schema:
                type: string
                example: "--------- beginning of main\n
03-13 18:49:57.893 12758 12758 I MDMAppMgmtLogger: RestoreInstallApplicationRestriction\n
03-13 18:49:57.895  3101  3101 E PhoneInterfaceManager: [PhoneIntfMgr]\n getCarrierPackageNamesForIntentAndPhone: No UICC\n
03-13 18:49:57.895  3101  3101 D CarrierSvcBindHelper: No carrier app for: 0"
                #$ref: '#/components/schemas/SeleniumLogResponse'
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []
      
  /sessions/{session_id}/log/devicelogzip:
    get:
      tags:
      - Session
      summary: devicelog custom logs of a test session in .zip file (Server 2)
      description: To fetch devicelog in zipped format that contains all device logs including custom logs generated during a test session.
      operationId: getDeviceLogZip
      parameters:
      - name: session_id
        in: path
        description: Session ID
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        200:
          description: Zipped device logs fetched successfully.
          content:
            application/zip:
              schema:
                type: string
                format: binary
        400:
          description: session id not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SessionNotFound'
        401:
          description: Access denied. Auth error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AccessDenied'
      security:
      - basicAuth: []

  /sessions/{test_id}/stop:
    put:
      tags:
        - Session
      summary: Stop a running test session (server 2)
      description: Stops a running test session using its `test_id`
      parameters:
        - name: test_id
          in: path
          required: true
          description: The ID of the session (test) to stop.
          schema:
            type: string
      requestBody:
        required: false
        content:
          application/json:
            schema:
              type: object
      security:
        - basicAuth: []
      responses:
        '200':
          description: Test Session stopped successfully.
        '401':
          description: Unauthorized request.
        '404':
          description: Test Id not found.
        '409':
          description: Stop Already in Progress.
        '500':
          description: Internal Server Error


components:

  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
      
  schemas:
    
    AppUrlResponse:
      type: object
      properties:
        appUrl:
          type: string
      required:
        - appUrl
    DeviceList:
      type: array
      items:
        $ref: '#/components/schemas/Device'
    Device:
      type: object
      properties:
        deviceId:
          type: string
          description: Unique identifier for the device
          example: "d123"
        deviceName:
          type: string
          description: Name of the device
          example: "Pixel 4"
        platformName:
          type: string
          description: Name of the platform the device runs
          example: "Android"
        platformVersion:
          type: string
          description: Version of the platform the device runs
          example: "10.0"
        deviceStatus:
          type: string
          description: Status of the device
          example: "Available"
    Error:
      type: object
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string
    ListBuildResponse:
      required:
      - Meta
      - data
      properties:
        Meta:
          $ref: '#/components/schemas/ListsTestsResponse_Meta'
        data:
          type: array
          items:
            $ref: '#/components/schemas/ListBuildResponse_data'
    ListsTestsResponse_Meta_attributes:
      type: object
      properties:
        org_id:
          type: number
    ListsTestsResponse_Meta_result_set:
      type: object
      properties:
        count:
          type: number
          example: 1
        limit:
          type: number
          example: 1
        offset:
          type: number
        total:
          type: number
          example: 100
    ListsTestsResponse_Meta:
      type: object
      properties:
        attributes:
          $ref: '#/components/schemas/ListsTestsResponse_Meta_attributes'
        result_set:
          $ref: '#/components/schemas/ListsTestsResponse_Meta_result_set'
    ListBuildResponse_data:
      type: object
      properties:
        build_id:
          type: number
          example: 1782
        name:
          type: string
          example: shivam-video-test
        user_id:
          type: number
          example: 1212
        username:
          type: string
          example: shivam
        status_ind:
          type: string
          example: completed
        create_timestamp:
          type: string
          example: "2019-02-05 08:24:36"
        end_timestamp:
          type: string
          example: "2019-02-05 08:27:22"
        project_id:
          type: string
          example: 0
        project_name:
          type: string
          example: automation1
        tags:
          type: array
          items:
            type: string
          example:  ["tag1", "tag2", "tag3"]
    AccessDenied:
      type: string
      example: 'HTTP Basic: Access denied.'
    SingleBuildResponse:
      properties:
        data:
          $ref: '#/components/schemas/SingleBuildResponse_data'
        message:
          type: string
          example: Retrieve build list was successful
        status:
          type: string
          example: success
    SingleBuildResponse_data:
      type: object
      properties:
        build_id:
          type: number
          example: 1
        name:
          type: string
          example: asdaskjaaa
        user_id:
          type: number
          example: 1212
        username:
          type: string
          example: john smith
        status_ind:
          type: string
          example: completed
        create_timestamp:
          type: string
          example: "2018-12-23 14:30:14"
        end_timestamp:
          type: string
          example: "2018-12-25 12:46:38"
        tags:
          type: array
          items:
            type: string
          example:  ["tag1", "tag2", "tag3"]
    DeleteBuildResponse:
      type: object
      properties:
        message:
          type: string
          example: Build deleted successfully
        status:
          type: string
          example: success
        data:
          $ref: '#/components/schemas/EditBuildResponse_data'
    EditBuildResponse_data:
      type: object
      properties:
        result:
          type: string
          example: "1"
    EditBuild:
      type: object
      properties:
        name:
          type: string
          format: string
        build_result:
          type: string
          format: string
    ConcurrencyDetails:
      type: object
      properties:
        data:
          type: object
          properties:
            max_concurrency:
              type: integer
              description: Maximum concurrency allowed
            max_queue:
              type: integer
              description: Maximum queue size allowed
            queued:
              type: integer
              description: Number of queued tasks
            running:
              type: integer
              description: Number of tasks currently running
          required:
            - max_concurrency
            - max_queue
            - queued
            - running
    EditBuildResponse:
      type: object
      properties:
        message:
          type: string
          example: Build updated successfully
        status:
          type: string
          example: success
        data:
          $ref: '#/components/schemas/EditBuildResponse_data'
    ListsTestsResponse:
      required:
      - Meta
      - data
      properties:
        Meta:
          $ref: '#/components/schemas/ListsTestsResponse_Meta'
        data:
          type: array
          items:
            $ref: '#/components/schemas/ListsTestsResponse_data'
        message:
          type: string
          example: "Retrieve build list was successful"
        status:
          type: string
          example: "success"
    ListsTestsResponse_data:
      type: object
      properties:
        test_id:
          type: string
          example: Z17EF-OPUKH-BDAE8-YEPXU
        build_id:
          type: integer
          example: 1
        build_name:
          type: string
          example: MACOS 10.12-CHROME-2018-12-23
        user_id:
          type: integer
          example: 250563
        username:
          type: string
          example: bahubali
        status_ind:
          type: string
          example: passed
        create_timestamp:
          type: string
          example: "2019-02-05 08:24:36"
        start_timestamp:
          type: string
          example: "2019-02-05 08:24:58"
        end_timestamp:
          type: string
          example: "2019-02-05 08:27:22"
        remark:
          type: string
          example: completed
        platform:
          type: string
          example: android
        version:
          type: string
          example: "12"
        name:
          type: string
          example: Google Pixel 6_12_1JNEQOQMS1
        session_id:
          type: string
          example: e7f2d7jkwdkbjdsvbkc8d0569
        device:
          type: string
          example: Google Pixel 6
        duration:
          type: string
          example: "369"
        tag:
          type: array
          description: Tags associated with the session, set via desired capabilities. Only present when tags are set.
          items:
            type: string
          example:  ["tag1", "tag2", "tag3"]
        customdata:
          type: object
          description: Custom metadata associated with the session, set via the customData desired capability. Only present when customData is set.
          additionalProperties: true
          example:
            project: "my-project"
            environment: "staging"
            build_number: "123"
        appium_logs:
          type: string
          example: sessions/jnwkdnkvdsf0c4-4jnkdjkbdvscbfc5/log/appium
        console_logs:
          type: string
          example: sessions/jnwkdnkvdsf0c4-4jnkdjkbdvscbfc5/log/console
        network_logs:
          type: string
          example: sessions/jnwkdnkvdsf0c4-4jnkdjkbdvscbfc5/log/network
        device_logs:
          type: string
          example: sessions/jnwkdnkvdsf0c4-4jnkdjkbdvscbfc5/log/devicelog
        command_logs:
          type: string
          example: sessions/jnwkdnkvdsf0c4-4jnkdjkbdvscbfc5/log/command
        video_url:
          type: string
          example: "?mobile=true&testID=AMABJDFAB9G&auth=0880eb1993ghkdjsvkbjfd"
        screenshot_url:
          type: string
          example: "http://dmanfqoqano.cloudfront.net/orgId-0/AIQBFMANNB9G/screenshots.zip"
    SessionNotFound:
      type: object
      properties:
        message:
          type: string
          example: Either resource not found or already deleted
        status:
          type: string
          example: fail
    Session:
      type: object
      properties:
        data:
          $ref: '#/components/schemas/SessionData'
        message:
          type: string
          example: Retrieve session was successful
        status:
          type: string
          description: pet status in the store
          enum:
          - success
          - failed
    SessionDeleteSuccess:
      type: object
      properties:
        message:
          type: string
          example: Session deleted successfully
        status:
          type: string
          example: success
    SessionForbidden:
      type: object
      properties:
        message:
          type: string
          example: Forbidden! Operation not allowed.
        status:
          type: string
          example: fail
    SessionUpdateSuccess:
      type: object
      properties:
        message:
          type: string
          example: Session updated successfully
        status:
          type: string
          example: success
    UpdateSessionPayload:
      type: object
      properties:
        name:
          type: string
          example: mytest
        status_ind:
          type: string
          example: passed
        custom_data:
          type: object
    SessionData:
      type: object
      properties:
        test_id:
          type: string
          example: Z17EF-OPUKH-BDAE8-YEPXU
        build_id:
          type: integer
          example: 1
        name:
          type: string
          example: mytest
        user_id:
          type: integer
          example: 250563
        username:
          type: string
          example: bahubali
        duration:
          type: integer
          format: int
        platform:
          type: string
          example: win10
        browser:
          type: string
          example: chrome
        browser_version:
          type: string
          example: "71.0"
        device:
          type: string
        status_ind:
          type: string
        session_id:
          type: string
          example: bc02fd99593f14e37850745d66197f89
        build_name:
          type: string
          example: my-build
        create_timestamp:
          type: string
          example: "2019-02-05 08:24:36"
        start_timestamp:
          type: string
          example: "2019-02-05 08:24:58"
        end_timestamp:
          type: string
          example: "2019-02-05 08:27:22"
        remark:
          type: string
          example: completed
        console_logs_url:
          type: string
          example: https://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/console
        network_logs_url:
          type: string
          example: https://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/network
        command_logs_url:
          type: string
          example: http://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/command
        appium_logs_url:
          type: string
          example: http://api.lambdatest.com/automation/api/v1/sessions/bc02fd99593f14e37850745d66197f89/log/appium
        screenshot_url:
          type: string
          example: https://s3.amazonaws.com/ml-screenshots/00HIR-IQNLL-SDVHV-KDTBM/video/index.m3u8
        video_url:
          type: string
          example: https://d15x9hjibri3lt.cloudfront.net/00HIR-IQNLL-SDVHV-KDTBM/screenshots.zip
        customData:
          type: object
    VideoResponse:
      type: object
      properties:
        message:
          type: string
          example: Retrieve video url was successful
        status:
          type: string
          example: success
        url:
          type: string
        view_video_url:
          type: string
    LogResponse:
      required:
      - Value
      properties:
        Value:
          $ref: '#/components/schemas/LogResponse_data'
    LogResponse_data:
      type: object
      properties:
        logType:
          type: string
          example: requestLog
        testID:
          type: string
          example: 5HLCQ-HPCWH-UOE2O-2CUFA
        status:
          type: number
          example: 0
        timestamp:
          type: number
          example: 1551356385
        orgID:
          type: number
          example: 0
        requestId:
          type: string
          example: 82e3b7cd-3b04-4bc8-9d2b-567aff450fe4
        RequestStartTime:
          type: number
          example: 1551356385
        requestMethod:
          type: string
          example: POST
        requestPath:
          type: string
          example: /wd/hub/session/2F42BCCC-BF43-426A-A72F-F58F58167496/element/node-DF5D363E-84A2-4CA4-9AC4-0F398C606082/click
        duration:
          type: number
          example: 8
        requestBody:
          type: string
          example: '{"sessionId": "2F42BCCC-BF43-426A-A72F-F58F58167496", "id": "node-DF5D363E-84A2-4CA4-9AC4-0F398C606082"}'
        responseBody:
          type: string
          example: '{"status":0,"sessionId":"2F42BCCC-BF43-426A-A72F-F58F58167496","value":{}}'
        responseStatus:
          type: string
          example: 200 OK
        screenshotId:
          type: string
          example: 56bcabhakjasnac75142bc

    NetworkLogResponse:
      properties:
        _id:
          type: string
          example: uigakk12kbad
        cache:
          type: object
        startedDateTime:
          type: string
          example: "2022-03-14T08:48:33.516688738Z"
        time:
          type: integer
          example: 0
        timings:
          type: object
          properties:
            receive:
              type: integer
              example: 0
            send:
              type: integer
              example: 0
            wait:
              type: integer
              example: 0
        request:
          $ref: '#/components/schemas/NetworkLogRequest_Value'
        response:
          $ref: '#/components/schemas/NetworkLogResponse_Value'
        
      
    NetworkLogResponse_Value:
      type: object
      properties:
        bodySize:
          type: integer
          example: 0
        content:
          type: object
          properties:
            encodeing:
              type: string
              example: "base64"
            mimeType:
              type: string
              example: ""
            text:
              type: string
              example: ""
            size:
              type: integer
              example: 0
        cookies:
          type: array
          items: {}
        headers:
          type: array
          items: {}
        headersSize:
          type: integer
          example: -1
        httpVersion:
          type: string
          example: "HTTP/1.1"
        redirectURL:
          type: string
          example: ""
        status:
          type: integer
          example: 200
        statusText:
          type: string
          example: "OK"

    NetworkLogRequest_Value:
      type: object
      properties:
        bodySize:
          type: integer
          example: 0
        cookies:
          type: array
          items: {}
        headers:
          type: array
          items: {}
        headersSize:
          type: integer
          example: -1
        httpVersion:
          type: string
          example: "HTTP/1.1"
        method:
          type: string
          example: "CONNECT"
        queryString:
          type: array
          items: {}
        url:
          type: string
          example: "http://testing.com"
    SessionBadResquest:
      type: object
      properties:
        message:
          type: string
          example: Please provide a valid payload
        status:
          type: string
          example: fail
          
    # ScreenshotResponse:
    #   type: object
    #   properties:
    #     message:
    #       type: string
    #       example: Retrieve screenshot url was successful
    #     status:
    #       type: string
    #       example: success
    #     url:
    #       type: string
```

---


## 4. Smart UI

**File:** `smart-ui.yaml` | **Size:** 16770 bytes | **Lines:** 549

```yaml
openapi: 3.0.0
info:
  title: TestMu AI SmartUI API Documentation
  version: 1.0.1
servers:
#- url: https://virtserver.swaggerhub.com/faisal097/ltma16mar19/1.0.1
#  description: SwaggerHub API Auto Mocking
- url: 'https://api.lambdatest.com/automation/smart-ui'
- url: 'https://eu-api.lambdatest.com/automation/smart-ui'
paths:
  /v2/upload:
    post:
      tags:
      - Upload Screenshots
      summary: Upload any locally captured images to SmartUI for visual regression testing.Maximum Upload Size:100MB
      description:  Using this API you can upload any local images to our cloud comparsion. You can upload images and add their meta-data information to map the screenshots for comparsion.
      requestBody:
        description: Pass your list of screenshots which needs to be uploaded for comparison. (Minimum 1 file required)
        required: true
        content:
          multipart/form-data:
            schema:
              type : object
              required:
                - files
                - projectToken
              properties:
                files:
                  type: string
                  format: binary
                projectToken:
                  type : string
                  example: "projectToken#key"
                buildName:
                  type: string
                  example: "any"
                baseline:
                  type: boolean
                  example: false
                screenshotNames:
                  type: string
                  example: "screenshot1,screenshot2"
                githubURL:
                  type: string
                  example: "https://api.github.com/repos/OWNER/REPO/statuses/commitId"
      responses:
        200:
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UploadScreenshotResponseV2'
        400:
          description: Invalid/Missing Project Token . Missing mandatory parameters or wrong input.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UploadScreenshotError'
      security:
      - basicAuth: []
  /build/status:
    get:
      tags:
        - Get Build Status
      summary: Fetch build status by buildId or buildName
      description: >
        This API fetches the build status along with the count of different screenshot statuses.
        **Note:** When both `buildId` and `buildName` are provided in the request, `buildId` will be given priority over `buildName`.

      parameters:
      - name: projectToken
        in: query
        description: Validate and map the project in which the build exists
        required: true
        style: form
        explode: true
        schema:
          type: string
      - name: buildId
        in: query
        description: Unique ID for the build. You can get it from the URL of build's tests page.
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: buildName
        in: query
        description: Name of the build. (For storybook project, provide build ID)
        required: false
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BuildStatusResponse'
        400:
          description: Mandatory parameters are missing/empty in request. Please add/correct them in query parameters
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BuildStatusError'
      security:
        - basicAuth: []
  /screenshot/build/status:
    get:
      tags:
        - Get Screenshot Status
      summary: Fetch build status by buildId / buildName
      description: >
        This API fetches the status of all screenshots which are uploaded to smartui using either build id or build name.
        **Note:** When both `buildId` and `buildName` are provided in the request, `buildId` will be given priority over `buildName`.
      parameters:
      - name: projectToken
        in: query
        description: To validate the project in which you want to map your uploaded screenshots
        required: true
        style: form
        explode: true
        schema:
          type: string
      - name: buildId
        in: query
        description: You can pass the id of speicifc build if you need to map multiple screenshots of different tests to one build. (Optional)
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: buildName
        in: query
        description: You can pass the name of specific build if you need to map multiple screenshots of different tests to one build. (Optional)
        required: false
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ScreenshotStatusBuildResponse'
        400:
          description: Either Screenshot don't exist or bad input
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ScreenshotStatusBuildError'
      security:
        - basicAuth: []
  /build/screenshots:
    get:
      tags:
        - Fetch Build Screenshots
      summary: Fetch SmartUI build screenshots by project_id and build_id 
      description: >
        This API fetches all screenshots of a particular build with comparison details.
        **Note:** When both `build_id` and `build_name` are provided in the request, `buildId` will be given priority over `buildName`.
      parameters:
      - name: project_name
        in: query
        description: The name of the particular project (project id can also be used)
        required: true
        style: form
        explode: true
        schema:
          type: string
      - name: project_id
        in: query
        description: Unique identifier of the project (project name can also be used)
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: build_name
        in: query
        description: Build name can also be used instead of build Id (Optional)
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: build_id
        in: query
        description: Fetches all the screenshots of a particular build
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: baseline
        in: query
        description: Fetches the screenshots of the baseline build of the project
        required: false
        style: form
        explode: true
        schema:
          type: boolean
          default: false
      - name: screenshot_name
        in: query
        description: Fetches details of a specific screenshot
        required: false
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BuildScreenshotResponse'
        400:
          description: Either Screenshot don't exist or bad input specified
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BuildScreenshotError'
      security:
        - basicAuth: []
      servers:
        - url: https://api.lambdatest.com/smartui/2.0
components:
  schemas:
    ScreenshotStatusBuildError:
      type: object
      properties:
        data: 
          type: object
          properties:
            Screenshots:
               type: string
               example: "null"
            buildId:
               type: string
               example: "f3e9bf89-4b61-4eb2-ad60-aaa72150d05e"
            buildName:
               type: string
               example: build-1
            projectName:
               type: string
               example: demo-project
        status:
          type: string
          example: "success"
    ScreenshotStatusBuildResponse:
      type: object
      properties:
        data:
          type: object
          properties:
            Screenshots: 
               type: array
               items:
                 $ref: '#/components/schemas/ScreenshotProperties'
            buildId:
               type: string
               example: 50af60e1-8709-40b1-981f-19636de5a590
            buildName:
               type: string
               example: 0e1915b
            projectName: 
               type: string
               example: FPS-Monterey
            buildStatus:
               type: string
               example: 1 Under Review
                  
        status:
          type: string
          example: "success"
    ScreenshotProperties:
       type: object
       properties:
          screenshotId:
             type: string
             example: 3137e779-e00a-4d88-8cbe-9ff2eb8cceaf
          mismatchPercentage:
             type: number
             example: 12.65
          threshold:
             type: number
             example: 1200
          status:
             type: string
             example: Under Screening
    UploadScreenshotError:
      type: object
      properties:
        data:
          type: string
          example: Please Specify Project Token. It is a mandatory parameter
        message:
          type: string
          example: error
        status:
          type: string
          example: fail
    UploadScreenshotResponseV2:
      type: object
      properties:
        data:
          type: object
          properties:
            filesUploaded:
              type: object
              properties:
                error: 
                  type: string
                  example : ""
                message:
                  type: string
                  example: ""
                fileName:
                  type: string
                  example: "Screenshot 2022-12-05 at 5.00.37 PM.png"
                screenshotName:
                  type: string
                  example: "screenshot1"
            buildName:
              type: string
              example: "build-1"
            buildId:
              type: string
              example: "f3e9bf89-4b61-4eb2-ad60-aaa72150d05e"
            projectName:
              type: string
              example: "demo-project"
            totalFilesUploaded:
              type: integer
              example: 1
            projectId:
              type: string
              example: "65bd1675-fe42-40bf-9698-7610cb4211bd"
        status:
          type: string
          example: "success"
    UploadScreenshotResponse:
      type: object
      properties:
        data:
          type: object
          properties:
            filesUploaded:
              type: object
              properties:
                error: 
                  type: string
                  example : ""
                message:
                  type: string
                  example: ""
                key:
                  type: string
                  example: "2fcf6664-5d60-4098-9df8-6bb7b38230cc.png"
                screenshotName:
                  type: string
                  example: "screenshot1"
            buildName:
              type: string
              example: "build-1"
            buildId:
              type: string
              example: "f3e9bf89-4b61-4eb2-ad60-aaa72150d05e"
            projectName:
              type: string
              example: "demo-project"
            status:
              type: string
              example: active
            projectId:
              type: string
              example: "65bd1675-fe42-40bf-9698-7610cb4211bd"
        status:
          type: string
          example: "success"
    BuildStatusError:
      type: object
      properties:
        data: 
          type: object
          properties:
            data: 
              type: object
              properties:
                changesFound:
                  type: integer
                  example: 0
                approved:
                  type: integer
                  example: 0
                underReview:
                  type: integer
                  example: 0
                rejected:
                  type: integer
                  example: 0
                buildId:
                  type: string
                  example: ""
                buildName:
                  type: string
                  example: ""
                projectName:
                  type: string
                  example: ""
                buildStatus:
                  type: string
                  example: ""
                message:
                  type: string
                  example: ""
        message:
          type: string
          example: "Mandatory parameters are missing/empty in request. Please add/correct them in query parameters"
        status:
          type: string
          example: "fail"
    BuildStatusResponse:
      type: object
      properties:
        data:
          type: object
          properties:
            changesFound:
              type: integer
              example: 2
            approved:
              type: integer
              example: 3
            underReview:
              type: integer
              example: 0
            rejected:
              type: integer
              example: 0    
            buildId:
              type: string
              example: "2423e94d-7f12-460c-8de7-e35db3698d8a"
            buildName:
              type: string
              example: "c24dd3e"
            projectName:
              type: string
              example: "web-project"
            buildStatus:
              type: string
              example: "Changes Need Approval"
            message:
              type: string
              example: "Fetched Build Status Successfully"
        status:
          type: string
          example: "success"
    BuildScreenshotError:
      type: object
      properties:
        error:
          type: string
          example: "smartui project not found for specified input"
    BuildScreenshotResponse:
      type: object
      properties:
        screenshots:
          type: array
          items:
            $ref: '#/components/schemas/BuildScreenshotProperties'
        build:
          type: object
          properties:
            build_id:
               type: string
               example: c74f72b5-2dd9-42a4-9478-cd8174a56152
            name:
               type: string
               example: build-1
            baseline: 
               type: boolean
               example: false
            build_status:
               type: string
               example: Approved
        project:
          type: object
          properties:
            project_id:
               type: string
               example: ed2ee7bc-d90d-4719-91a7-19636de5a590
            name:
               type: string
               example: web-project
            username: 
               type: string
               example: dummy
    BuildScreenshotProperties:
       type: object
       properties:
          screenshot_name:
             type: string
             example: first
          captured_image:
             type: string
             example: URL
          baseline_image: 
             type: string
             example: URL
          compared_image:
             type: string
             example: URL
          browser_name:
             type: string
             example: chrome
          browser_version:
             type: string
             example: "118.0"
          viewport:
             type: string
             example: "1920x1080"
          os:
             type: string
             example: default
          mismatch_percentage:
             type: number
             example: 0.1
          status:
             type: string
             example: Approved
          approved_by:
             type: string
             example: dummy
          captured_image_timestamp:
             type: string
             example: "2023-11-10 13:47:24"
          compared_image_timestamp:
             type: string
             example: "2023-11-10 13:47:29"
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```

---


## 5. Cypress Automation

**File:** `cypress-automation.yaml` | **Size:** 11574 bytes | **Lines:** 412

```yaml
openapi: 3.0.0
info:
  title: TestMu AI Cypress Testing API Documentation
  version: 1.0.1
servers:
#  description: SwaggerHub API Auto Mocking
- url: 'https://api.lambdatest.com/automation/api/v1/cypress'
- url: 'https://eu-api.lambdatest.com/automation/api/v1/cypress'
paths:
  /report/{test_id}:
    get:
        tags:
            - Cypress
        summary: Zipped report for a cypress test
        description: To fetch zipped report for a cypress test.
        operationId: cypressReport
        parameters:
            -   name: test_id
                in: path
                description: get cypress report based on test id
                required: true
                style: simple
                explode: false
                schema:
                    type: string
        responses:
            200:
                description: successful operation
                content:
                    application/octet-stream:
                        schema:
                            type: string
                            format: binary
            400:
                description: test id not found
                content:
                    application/json:
                        schema:
                            $ref: '#/components/schemas/SessionNotFound'
            401:
                description: Access denied. Auth error.
                content:
                    application/json:
                        schema:
                            $ref: '#/components/schemas/AccessDenied'
        security:
            -   basicAuth: [ ]	
  /log/{test_id}/command:	
    get:	
      tags:	
      - Cypress	
      summary: Command logs of a cypress test id	
      description: To fetch all the executed commands of a cypress test id in plain json text.	
      operationId: cypressCommandLog	
      parameters:	
      - name: test_id	
        in: path	
        description: Test ID	
        required: true	
        style: simple	
        explode: false	
        schema:	
          type: string	
      responses:	
        200:	
          description: successful operation	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/CypressCommandLogResponse'	
        400:	
          description: session id not found	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/SessionNotFound'	
        401:	
          description: Access denied. Auth error.	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/AccessDenied'	
        404:	
          description: Logs not found	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/LogsNotFound'	
      security:	
      - basicAuth: []  	
  /log/{test_id}/console:	
    get:	
      tags:	
      - Cypress	
      summary: Console log of a cypress test id	
      description: To fetch cypress console log that contains console errors thrown by application during a test session in plain json text.	
      operationId: cypressConsoleLog	
      parameters:	
      - name: test_id	
        in: path	
        description: Test ID	
        required: true	
        style: simple	
        explode: false	
        schema:	
          type: string	
      responses:	
        200:	
          description: successful operation	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/CypressConsoleLogResponse'	
        400:	
          description: session id not found	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/SessionNotFound'	
        401:	
          description: Access denied. Auth error.	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/AccessDenied'	
        404:	
          description: Logs not found	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/LogsNotFound'	
      security:	
      - basicAuth: []	
  /log/{test_id}/network:	
    get:	
      tags:	
      - Cypress	
      summary: Network log of a Cypress test id	
      description: To fetch Network log that contains all the requested urls of a Cypress test id in plain json text.	
      operationId: cypressNetworkLog
      parameters:	
      - name: test_id	
        in: path	
        description: get logs based on test id	
        required: true	
        style: simple	
        explode: false	
        schema:	
          type: string	
      responses:	
        200:	
          description: successful operation	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/CypressNetworkLogResponse'	
        400:	
          description: session id not found	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/SessionNotFound'	
        401:	
          description: Access denied. Auth error.	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/AccessDenied'	
        404:	
          description: Logs not found	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/LogsNotFound'	
      security:	
      - basicAuth: []	
  /mochawesome/enhanced/{test_id}:
    get:	
      tags:	
      - Cypress	
      summary: Enhanced Mochawesome JSON Report
      description: To fetch mochawesome json report for a test with additional key(video url, screenshot url).	
      operationId: cypressMochawesomeData	
      parameters:	
      - name: test_id	
        in: path	
        description: get mochawesome json report for a test id	
        required: true	
        style: simple	
        explode: false	
        schema:	
          type: string	
      responses:	
        200:	
          description: successful operation	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/CypressMochawesomeResponse'	
        400:	
          description: session id not found	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/SessionNotFound'	
        401:	
          description: Access denied. Auth error.	
          content:	
            application/json:	
              schema:	
                $ref: '#/components/schemas/AccessDenied'	
      security:	
      - basicAuth: []	

components:
  schemas:
    CypressCommandLogResponse:
      required:
      - data
      - message
      - status 
      properties:
        data:
          $ref: '#/components/schemas/CypressCommandLogResponse_data' 
        message:
          type: string
          example: Retrieve logs list was successful
        status:
          type: string
          example: success
    CypressConsoleLogResponse:
      required:
      - data
      - message
      - status  
      properties:
        data:
           type: string
           example: "{...}"
        message:
          type: string
          example: Retrieve logs list was successful
        status:
          type: string
          example: success
    CypressNetworkLogResponse:
      required:
      - data
      - message
      - status 
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/CypressNetworkLogResponse_data'
        message:
          type: string
          example: Retrieve logs list was successful
        status:
          type: string
          example: success
    CypressMochawesomeResponse:
      required:
      - stats
      - results
      - meta
      properties:
        stats:
          type: string
          example: "{...}"
          # items:
          #   $ref: "{...}"
        results:
          type: array
          example: "[{...}, {...}]"
        meta:
          type: string
          example: "{...}"
    CypressCommandLogResponse_data:
      type: object
      properties:
        spec:
          type: string
          example: examples/actions.spec.js
        suites:
          type: array
          items:
            $ref: '#/components/schemas/CypressCommandLogResponse_suiteData'   
    CypressCommandLogResponse_suiteData:
      type: object
      properties:
        tests:
          type: array
          items:
            $ref: '#/components/schemas/CypressCommandLogResponse_Value' 
    CypressCommandLogResponse_Value:
      type: object
      properties:
        code:
          type: string
          example: https://on.cypress.io/cy.get...
        context:
          type: string
          example: Null
        duration:
          type: number
          example: 1782
        err:
          type: object
          example: {}
        fail:
          type: boolean
          example: true
        fullTitle:
          type: string
          example: Actions .blur() - blur off a DOM element.
        isHook:
          type: boolean
          example: false
        parentUUID:
          type: string
          example: ff9d286c-2d74-4241-8554-b5fe32a4d7e2
        pass:
          type: boolean
          example: true
        pending:
          type: boolean
          example: true
        skipped:
          type: boolean
          example: true
        speed:
          type: string
          example: medium
        state:
          type: string
          example: passed
        timedOut:
          type: string
          example: Null
        title:
          type: string
          example: blur off a DOM element
        uuid:
          type: string
          example: 0bbd4e33-d38c-44ac-acd0-702142c10594
    CypressNetworkLogResponse_data:
      type: object
      properties:
        Value:
          type: object
          properties:
            _id:
              type: string
              example: e2ac17b1f2ef625a
            cache:
              type: object
            request:
              type: object
            response:
              type: object
            startedDateTime:
              type: string
              example: "2022-04-04T13:47:40.853493Z"
            time:
              type: number
              example: 0
            timings:
              type: object
        logType:
          type: string
          example: network
        order:
          type: number
          example: 5
        testID:
          type: string
          example: 5TSTJ-LIPQM-VDVJH-CT129   
    SessionNotFound:
      type: object
      properties:
        message:
          type: string
          example: Either resource not found or already deleted
        status:
          type: string
          example: fail
    LogsNotFound:
      type: object
      properties:
        message:
          type: string
          example: No logs are currently available. Logs may not have been generated yet or may have expired.
        status:
          type: string
          example: fail
    SessionForbidden:
      type: object
      properties:
        message:
          type: string
          example: Forbidden! Operation not allowed.
        status:
          type: string
          example: fail
    AccessDenied:
      type: string
      example: 'HTTP Basic: Access denied.'
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```

---


## 6. User Management

**File:** `user-management.yaml` | **Size:** 192606 bytes | **Lines:** 5751

```yaml
openapi: 3.0.3
info:
  title: TestMu AI User Management API Documentation
  version: 1.0.0
  description: "API documentation of User Management"
servers:
- url: 'https://auth.lambdatest.com/'
- url: 'https://eu-auth.lambdatest.com/'
paths:
  /api/organization/users:
    get:
      security:
        - basicAuth: [ ]  
      tags:
        - Users
      summary: Get All users
      description: Get All users
      operationId: getAllUsers
      responses:
        '200':
          description: Get All users
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      type: object
                      properties:
                        email:
                          type: string
                          example: pawan17@lambdatest.com
                        group:
                          type: object
                          properties:
                            id:
                              type: number
                              example: 814
                            name:
                              type: string
                              example: g2
                        id:
                          type: number
                          example: 407868
                        name:
                          type: string
                          example: pawan rai
                        role:
                          type: string
                          example: Admin
                    example:
                      - email: pawan17@lambdatest.com
                        group:
                          id: 814
                          name: g2
                        id: 407868
                        name: pawan rai
                        role: Admin
                      - email: kliosbuhek@qiott.com
                        group:
                          id: 817
                          name: g7
                        id: 407869
                        name: Pawan
                        role: Admin
              examples:
                Get All users:
                  value:
                    data:
                      - email: pawan17@lambdatest.com
                        group:
                          id: 814
                          name: g2
                        id: 407868
                        name: pawan rai
                        role: Admin
                      - email: kliosbuhek@qiott.com
                        group:
                          id: 817
                          name: g7
                        id: 407869
                        name: Pawan
                        role: Admin
        '401':
          description: Get All users Error
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Authentication token is missing or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Get All users Error:
                  value:
                    message: Sorry! Authentication token is missing or invalid
                    title: Unauthorized Error
                    type: error
  /api/organization/user:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Users
      summary: Edit details by admin
      description: Edit details by admin
      operationId: editDetailsByAdmin
      requestBody:
        description: Edit details by admin
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                group_id:
                  type: number
                  example: 421
                name:
                  type: string
                  example: Pawan
                user_id:
                  type: number
                  example: 407869
            example:
              group_id: 421
              name: Pawan
              user_id: 407869
      responses:
        '200':
          description: Edit name by admin Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: User profile updated successfully
                  type:
                    type: string
                    example: success
              examples:
                Edit name by admin Success:
                  value:
                    message: User profile updated successfully
                    type: success
        '403':
          description: Wrong id
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Wrong id:
                  value:
                    message: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                    title: Unauthorized Error
                    type: error
  /api/organization/user/{user_id}:
    patch:
      security:
        - basicAuth: [ ]
      tags:
        - Users
      summary: Update User Role by admin
      description: Update User Role by admin
      operationId: updateUserRoleByAdmin
      parameters:
      - name: user_id
        in: path
        description: user id of member
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                role:
                  type: string
                  example: Admin
            example:
              role: Admin
      responses:
        '200':
          description: Update User Role
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Organization role updated Successfully
                  type:
                    type: string
                    example: success
              examples:
                Update User Role:
                  value:
                    message: Organization role updated Successfully
                    type: success
        '422':
          description: Update User Role with invalid email
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry, Requested Role is not valid
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Update User Role with invalid email:
                  value:
                    message: Sorry, Requested Role is not valid
                    title: Bad Request Error
                    type: error
    delete:
      security:
        - basicAuth: [ ]
      tags:
        - Users
      summary: Delete members
      description: Delete members
      operationId: deleteMembers
      parameters:
      - name: user_id
        in: path
        description: user id of member
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: User deleted Successfully
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: User deleted Successfully
                    type: success
        '403':
          description: Delete Member from other Org Error
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Delete Member from other Org Error:
                  value:
                    message: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                    title: Unauthorized Error
                    type: error
  /api/organization/users/{user_id}/password:
    patch:
      security:
        - basicAuth: [ ]
      tags:
        - Users
      summary: User Password by admin
      description: User Password by admin
      operationId: userPasswordByAdmin
      parameters:
      - name: user_id
        in: path
        description: user id of member
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                confirm_password:
                  type: string
                  example: password1
                new_password:
                  type: string
                  example: password1
            example:
              confirm_password: password1
              new_password: password1
      responses:
        '200':
          description: User Password by admin Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Password changed successfully, for user - Pawan
                  type:
                    type: string
                    example: success
              examples:
                User Password by admin Success:
                  value:
                    message: Password changed successfully, for user - Pawan
                    type: success
        '422':
          description: User Password by admin
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: object
                    properties:
                      password:
                        type: string
                        example: Please do not use last used passwords
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                User Password by admin:
                  value:
                    message:
                      password: Please do not use last used passwords
                    title: Bad Request Error
                    type: error
  /api/organization/users-list:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Users
      summary: Get all member and invited users
      description: Get all member and invited users
      operationId: getAllMemberAndInvitedUsers
      responses:
        '200':
          description: Get all member and invited users Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      type: object
                      properties:
                        Email:
                          type: string
                          example: kliosbuhek@qiott.com
                        Group:
                          type: string
                          nullable: true
                          example: g7
                        InvitedAt:
                          type: string
                          nullable: true
                          example: '2022-12-30T17:00:51Z'
                        InvitedBy:
                          type: string
                          nullable: true
                          example: pawan rai
                        LastLoginAt:
                          type: string
                          nullable: true
                          example: '2022-12-30T17:01:20Z'
                        Name:
                          type: string
                          nullable: true
                          example: Pawan
                        Role:
                          type: string
                          example: Admin
                        Status:
                          type: string
                          example: Active
                    example:
                      - Email: kliosbuhek@qiott.com
                        Group: g7
                        InvitedAt: '2022-12-30T17:00:51Z'
                        InvitedBy: pawan rai
                        LastLoginAt: '2022-12-30T17:01:20Z'
                        Name: Pawan
                        Role: Admin
                        Status: Active
                      - Email: pawan17@lambdatest.com
                        Group: g2
                        InvitedAt: null
                        InvitedBy: null
                        LastLoginAt: '2022-12-30T16:57:59Z'
                        Name: pawan rai
                        Role: Admin
                        Status: Internal
                      - Email: pawan12@qiott.com
                        Group: null
                        InvitedAt: '2022-12-30T17:02:46Z'
                        InvitedBy: pawan rai
                        LastLoginAt: null
                        Name: null
                        Role: User
                        Status: Pending
                      - Email: 1secaml@qiott.com
                        Group: null
                        InvitedAt: '2022-12-30T17:02:46Z'
                        InvitedBy: pawan rai
                        LastLoginAt: null
                        Name: null
                        Role: Admin
                        Status: Pending
              examples:
                Get all member and invited users Success:
                  value:
                    data:
                      - Email: kliosbuhek@qiott.com
                        Group: g7
                        InvitedAt: '2022-12-30T17:00:51Z'
                        InvitedBy: pawan rai
                        LastLoginAt: '2022-12-30T17:01:20Z'
                        Name: Pawan
                        Role: Admin
                        Status: Active
                      - Email: pawan17@lambdatest.com
                        Group: g2
                        InvitedAt: null
                        InvitedBy: null
                        LastLoginAt: '2022-12-30T16:57:59Z'
                        Name: pawan rai
                        Role: Admin
                        Status: Internal
                      - Email: pawan12@qiott.com
                        Group: null
                        InvitedAt: '2022-12-30T17:02:46Z'
                        InvitedBy: pawan rai
                        LastLoginAt: null
                        Name: null
                        Role: User
                        Status: Pending
                      - Email: 1secaml@qiott.com
                        Group: null
                        InvitedAt: '2022-12-30T17:02:46Z'
                        InvitedBy: pawan rai
                        LastLoginAt: null
                        Name: null
                        Role: Admin
                        Status: Pending
        '401':
          description: Get all member and invited users Failure
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Authentication token is missing or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Get all member and invited users Failure:
                  value:
                    message: Sorry! Authentication token is missing or invalid
                    title: Unauthorized Error
                    type: error
  /api/organization/service-accounts:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Service Account
      summary: Get All Service Accounts
      description: Get All Service Accounts
      operationId: getAllServiceAccounts
      responses:
        '200':
          description: Get All Service Accounts Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      type: object
                      properties:
                        group:
                          type: object
                          properties:
                            id:
                              type: number
                              example: 814
                            name:
                              type: string
                              example: g2
                          nullable: true
                        id:
                          type: number
                          example: 407938
                        name:
                          type: string
                          example: pawan Groupupdated
                        created_at:
                          type: string
                          example: 2023-02-15T13:06:55Z
                    example:
                      - group:
                          id: 814
                          name: g2
                        id: 407938
                        name: pawan Groupupdated
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 814
                          name: g2
                        id: 407939
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 814
                          name: g2
                        id: 407943
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 814
                          name: g2
                        id: 412429
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 809
                          name: g6
                        id: 412430
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 815
                          name: g5
                        id: 412431
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group: null
                        id: 412432
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 814
                          name: g2
                        id: 412433
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
              examples:
                Get All Service Accounts Success:
                  value:
                    data:
                      - group:
                          id: 814
                          name: g2
                        id: 407938
                        name: pawan Groupupdated
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 814
                          name: g2
                        id: 407939
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 814
                          name: g2
                        id: 407943
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 814
                          name: g2
                        id: 412429
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 809
                          name: g6
                        id: 412430
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 815
                          name: g5
                        id: 412431
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group: null
                        id: 412432
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
                      - group:
                          id: 814
                          name: g2
                        id: 412433
                        name: pawan rai
                        created_at: 2023-02-15T13:06:55Z
        '401':
          description: Get All Service Accounts Failure
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Authentication token is missing or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Get All Service Accounts Failure:
                  value:
                    message: Sorry! Authentication token is missing or invalid
                    title: Unauthorized Error
                    type: error
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Service Account
      summary: Create Service Account
      description: Create Service Account
      operationId: createServiceAccount
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                group_id:
                  type: number
                  example: 814
                name:
                  type: string
                  example: pawan rai
            example:
              group_id: 814
              name: pawan rai
      responses:
        '200':
          description: Create Service Accounts Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  group:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 814
                      name:
                        type: string
                        example: g2
                  message:
                    type: string
                    example: Service Account Created SuccessFully
                  name:
                    type: string
                    example: pawan rai
                  type:
                    type: string
                    example: success
                  id:
                    type: number
                    example: 515639
              examples:
                Create Service Accounts Success:
                  value:
                    group:
                      id: 814
                      name: g2
                    message: Service Account Created SuccessFully
                    name: pawan rai
                    type: success
                    id: 515639
        '422':
          description: Create Service Accounts Failure
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Something went wrong! Group not found
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Create Service Accounts Failure:
                  value:
                    message: Something went wrong! Group not found
                    title: Bad Request Error
                    type: error
  /api/organization/service-accounts/{id}:
    put:
      security:
        - basicAuth: [ ]
      tags:
        - Service Account
      summary: Update Service Account
      description: Update Service Account
      operationId: updateServiceAccount
      parameters:
      - name: id
        in: path
        description: ID of Service Account
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  example: pawan rai
            example:
              name: pawan rai
      responses:
        '200':
          description: Update Service Accounts Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Service Account updated successfully
                  type:
                    type: string
                    example: success
              examples:
                Update Service Accounts Success:
                  value:
                    message: Service Account updated successfully
                    type: success
        '401':
          description: Update Service Accounts Failure
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Authentication token is missing or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Update Service Accounts Failure:
                  value:
                    message: Sorry! Authentication token is missing or invalid
                    title: Unauthorized Error
                    type: error
    delete:
      security:
        - basicAuth: [ ]
      tags:
        - Service Account
      summary: Delete service account
      description: Delete service account
      operationId: deleteServiceAccount
      parameters:
      - name: id
        in: path
        description: ID of Service Account
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Delete service accounts
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Service Account Deleted SuccessFully
                  type:
                    type: string
                    example: success
              examples:
                Delete service accounts:
                  value:
                    message: Service Account Deleted SuccessFully
                    type: success
        '422':
          description: Delete service accounts with invalid user id
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! User not found or invalid
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Delete service accounts with invalid user id:
                  value:
                    message: Sorry! User not found or invalid
                    title: Bad Request Error
                    type: error
  /api/organization/invites/users:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Invites Users
      summary: Invite user with Group
      description: Invite user with Group
      operationId: inviteUserWithGroup
      requestBody:
        content:
          application/json:
            schema:
              type: array
              items:
                type: object
                properties:
                  email:
                    type: string
                    example: xyz2@lambdatest.com
                  group_id:
                    type: number
                    example: 803
                  role:
                    type: string
                    example: User
              example:
                - email: xyz2@lambdatest.com
                  group_id: 803
                  role: User
            example:
              - email: xyz2@lambdatest.com
                group_id: 803
                role: User
      responses:
        '200':
          description: Invite user with Group
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Invite Sent Successfully
                  type:
                    type: string
                    example: success
              examples:
                Invite user with Group:
                  value:
                    message: Invite Sent Successfully
                    type: success
  /api/organization/invites:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Invites Users
      summary: Get invited users
      description: Get invited users
      operationId: getInvitedUsers
      responses:
        '200':
          description: Get invited users
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:09:08 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      type: object
                      properties:
                        accepted_at:
                          type: string
                          example: '2022-12-30T17:01:19Z'
                        group:
                          type: object
                          nullable: true
                          example: null
                        id:
                          type: number
                          example: 9131
                        recipient_email:
                          type: string
                          example: kliosbuhek@qiott.com
                        role:
                          type: string
                          example: User
                        sender:
                          type: object
                          properties:
                            email:
                              type: string
                              example: pawan17@lambdatest.com
                            id:
                              type: number
                              example: 407868
                            name:
                              type: string
                              example: pawan rai
                        sent_at:
                          type: string
                          example: '2022-12-30T17:00:51Z'
                        status:
                          type: string
                          example: Accepted
                    example:
                      - accepted_at: '2022-12-30T17:01:19Z'
                        group: null
                        id: 9131
                        recipient_email: kliosbuhek@qiott.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2022-12-30T17:00:51Z'
                        status: Accepted
                      - group: null
                        id: 9132
                        recipient_email: pawan12@qiott.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2022-12-30T17:02:46Z'
                        status: Withdrawn
                      - group: null
                        id: 9133
                        recipient_email: 1secaml@qiott.com
                        role: Admin
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2022-12-30T17:02:46Z'
                        status: Pending
                      - group: null
                        id: 9134
                        recipient_email: xyz2@lambdatest.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2022-12-30T17:47:55Z'
                        status: Withdrawn
                      - group: null
                        id: 9144
                        recipient_email: pawan12@qiott.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2023-01-02T08:04:03Z'
                        status: Pending
                      - group: null
                        id: 9145
                        recipient_email: 1secaml@qiott.com
                        role: Admin
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2023-01-02T08:04:03Z'
                        status: Withdrawn
                      - group: null
                        id: 9146
                        recipient_email: xyz2@lambdatest.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2023-01-02T08:07:24Z'
                        status: Withdrawn
                      - group:
                          id: 814
                          name: g2
                        id: 9147
                        recipient_email: xyz2@lambdatest.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2023-01-02T08:08:45Z'
                        status: Pending
              examples:
                Get invited users:
                  value:
                    data:
                      - accepted_at: '2022-12-30T17:01:19Z'
                        group: null
                        id: 9131
                        recipient_email: kliosbuhek@qiott.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2022-12-30T17:00:51Z'
                        status: Accepted
                      - group: null
                        id: 9132
                        recipient_email: pawan12@qiott.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2022-12-30T17:02:46Z'
                        status: Withdrawn
                      - group: null
                        id: 9133
                        recipient_email: 1secaml@qiott.com
                        role: Admin
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2022-12-30T17:02:46Z'
                        status: Pending
                      - group: null
                        id: 9134
                        recipient_email: xyz2@lambdatest.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2022-12-30T17:47:55Z'
                        status: Withdrawn
                      - group: null
                        id: 9144
                        recipient_email: pawan12@qiott.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2023-01-02T08:04:03Z'
                        status: Pending
                      - group: null
                        id: 9145
                        recipient_email: 1secaml@qiott.com
                        role: Admin
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2023-01-02T08:04:03Z'
                        status: Withdrawn
                      - group: null
                        id: 9146
                        recipient_email: xyz2@lambdatest.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2023-01-02T08:07:24Z'
                        status: Withdrawn
                      - group:
                          id: 814
                          name: g2
                        id: 9147
                        recipient_email: xyz2@lambdatest.com
                        role: User
                        sender:
                          email: pawan17@lambdatest.com
                          id: 407868
                          name: pawan rai
                        sent_at: '2023-01-02T08:08:45Z'
                        status: Pending
        '401':
          description: Get invited users without auth
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:09:27 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Authentication token is missing or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Get invited users without auth:
                  value:
                    message: Sorry! Authentication token is missing or invalid
                    title: Unauthorized Error
                    type: error
  /api/organization/invite/{invite_id}:
    put:
      security:
        - basicAuth: [ ]
      tags:
        - Invites Users
      summary: Resend Invite
      description: Resend Invite
      operationId: resendInvite
      parameters:
      - name: invite_id
        in: path
        description: Invitation ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Resend Invite Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 11:43:27 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Resent Invitiation Successfully
                  type:
                    type: string
                    example: success
              examples:
                Resend Invite Success:
                  value:
                    message: Resent Invitiation Successfully
                    type: success
        '422':
          description: Resend Invite Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:03:17 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry, Invalid invite
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Resend Invite Failure:
                  value:
                    message: Sorry, Invalid invite
                    title: Bad Request Error
                    type: error
    delete:
      security:
        - basicAuth: [ ]
      tags:
        - Invites Users
      summary: Delete invite user
      description: Delete invite user
      operationId: deleteInviteUser
      parameters:
      - name: invite_id
        in: path
        description: Invitation ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Delete invite user Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:02:37 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Invite user deleted Successfully
                  type:
                    type: string
                    example: success
              examples:
                Delete invite user Success:
                  value:
                    message: Invite user deleted Successfully
                    type: success
        '403':
          description: Delete invite user for withdrawn user
          headers:
            Date:
              schema:
                type: string
                example: Fri, 30 Dec 2022 18:31:27 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Delete invite user for withdrawn user:
                  value:
                    message: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                    title: Unauthorized Error
                    type: error
  /api/organization/service-accounts/{id}/token:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Token
      summary: Generate Service Account token
      description: Generate Service Account token
      operationId: GenerateServiceAccountToken
      parameters:
      - name: id
        in: path
        description: Service Account ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          text/plain:
            example: ''
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Fri, 30 Dec 2022 18:30:18 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Access Token generated successfully
                  token:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 421827
                      token:
                        type: string
                        example: bmrt4HX52bTcOHniFl3HAA9G4ehQHnLqUkGmLPRVxfef4iIBVZ
                      user_id:
                        type: number
                        example: 407938
                      username:
                        type: string
                        example: 4152033k0HaL6tuC
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Access Token generated successfully
                    token:
                      id: 421827
                      token: bmrt4HX52bTcOHniFl3HAA9G4ehQHnLqUkGmLPRVxfef4iIBVZ
                      user_id: 407938
                      username: 4152033k0HaL6tuC
                    type: success
        '401':
          description: Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:13:38 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Unauthenticated.
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Failure:
                  value:
                    message: Unauthenticated.
                    title: Unauthorized Error
                    type: error
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Token
      summary: Fetch Service Account Token
      description: Fetch Service Account Token
      operationId: fetchServiceAccountToken
      parameters:
      - name: id
        in: path
        description: Service Account ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:19:59 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Access Token retrieved successfully
                  token:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 426314
                      token:
                        type: string
                        example: EwnnWltfbiauIWQcGp5R6WlgIZgiP0FIuNszYIM8qP4NSuwveC
                      user_id:
                        type: number
                        example: 407939
                      username:
                        type: string
                        example: 415203LOjvQIAizR
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Access Token retrieved successfully
                    token:
                      id: 426314
                      token: EwnnWltfbiauIWQcGp5R6WlgIZgiP0FIuNszYIM8qP4NSuwveC
                      user_id: 407939
                      username: 415203LOjvQIAizR
                    type: success
        '403':
          description: Fetch Service Account Token other org user_id
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:19:31 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Fetch Service Account Token other org user_id:
                  value:
                    message: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                    title: Unauthorized Error
                    type: error
        '422':
          description: Fetch Service Account Token wrong user id
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:19:04 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! User not found or invalid
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Fetch Service Account Token wrong user id:
                  value:
                    message: Sorry! User not found or invalid
                    title: Bad Request Error
                    type: error
  /api/organization/users/{user_id}/token:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Token
      summary: Regen token by admin
      description: Regen token by admin
      operationId: regenTokenByAdmin
      parameters:
      - name: user_id
        in: path
        description: User ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          text/plain:
            example: ''
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:15:39 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Access Token generated successfully
                  token:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 426313
                      token:
                        type: string
                        example: iodiOqGDsjE27MfFROUa0OZzCpJnGDmHmKiHwrogtbuEDOLqIt
                      user_id:
                        type: number
                        example: 407939
                      username:
                        type: string
                        example: 415203LOjvQIAizR
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Access Token generated successfully
                    token:
                      id: 426313
                      token: iodiOqGDsjE27MfFROUa0OZzCpJnGDmHmKiHwrogtbuEDOLqIt
                      user_id: 407939
                      username: 415203LOjvQIAizR
                    type: success
        '403':
          description: Regen token by admin other org user id
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:16:09 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Regen token by admin other org user id:
                  value:
                    message: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                    title: Unauthorized Error
                    type: error
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Token
      summary: Fetch user token by admin
      description: Fetch user token by admin
      operationId: fetchUserTokenByAdmin
      parameters:
      - name: user_id
        in: path
        description: User ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:20:23 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Access Token retrieved successfully
                  token:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 426312
                      token:
                        type: string
                        example: 6KVBcEhO9iMdGXnZbxh8Ki19tNEX8GPpYjGPP5ivKHfKMUkF9s
                      user_id:
                        type: number
                        example: 407868
                      username:
                        type: string
                        example: pawan17
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Access Token retrieved successfully
                    token:
                      id: 426312
                      token: 6KVBcEhO9iMdGXnZbxh8Ki19tNEX8GPpYjGPP5ivKHfKMUkF9s
                      user_id: 407868
                      username: pawan17
                    type: success
        '422':
          description: Invalid Users
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:24:12 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! User not found or invalid
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Users:
                  value:
                    message: Sorry! User not found or invalid
                    title: Bad Request Error
                    type: error
  /api/user/password:
    patch:
      security:
        - basicAuth: [ ]
      tags:
        - User Profile
      summary: User Password
      description: User Password
      operationId: userPassword
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                new_password:
                  type: string
                  example: password3
                password:
                  type: string
                  example: password
            example:
              new_password: password3
              password: password
      responses:
        '200':
          description: User Password Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 07:17:42 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Password changed successfully, Please login again!
                  type:
                    type: string
                    example: success
              examples:
                User Password Success:
                  value:
                    message: Password changed successfully, Please login again!
                    type: success
        '422':
          description: User Password Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 07:17:20 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Please do not use last used passwords
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                User Password Failure:
                  value:
                    message: Please do not use last used passwords
                    title: Bad Request Error
                    type: error
  /api/user/token:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - User Profile
      summary: Fetch token by users
      description: Fetch token by users
      operationId: fetchTokenByUsers
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:17:06 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Access Token retrieved successfully
                  token:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 426312
                      token:
                        type: string
                        example: 6KVBcEhO9iMdGXnZbxh8Ki19tNEX8GPpYjGPP5ivKHfKMUkF9s
                      user_id:
                        type: number
                        example: 407868
                      username:
                        type: string
                        example: pawan17
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Access Token retrieved successfully
                    token:
                      id: 426312
                      token: 6KVBcEhO9iMdGXnZbxh8Ki19tNEX8GPpYjGPP5ivKHfKMUkF9s
                      user_id: 407868
                      username: pawan17
                    type: success
        '401':
          description: Fetch token by users Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:17:59 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Unauthenticated.
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Fetch token by users Failure:
                  value:
                    message: Unauthenticated.
                    title: Unauthorized Error
                    type: error
  /api/users/token:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - User Profile
      summary: Generate token by user
      description: Generate token by user
      operationId: GenerateTokenByUser
      requestBody:
        content:
          text/plain:
            example: ''
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Fri, 30 Dec 2022 17:59:13 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Access Token generated successfully
                  token:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 421758
                      token:
                        type: string
                        example: moZ9TJNna0e5CJ744Ab0e7SBIhXRywG5DiaZzmd9atYQk6WNBv
                      user_id:
                        type: number
                        example: 407868
                      username:
                        type: string
                        example: pawan17
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Access Token generated successfully
                    token:
                      id: 421758
                      token: moZ9TJNna0e5CJ744Ab0e7SBIhXRywG5DiaZzmd9atYQk6WNBv
                      user_id: 407868
                      username: pawan17
                    type: success
        '401':
          description: Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 08:12:21 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Unauthenticated.
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Failure:
                  value:
                    message: Unauthenticated.
                    title: Unauthorized Error
                    type: error
  /api/user:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - User Profile
      summary: Edit name by User
      description: Edit name by User
      operationId: editNameByUser
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  example: pawan rai
            example:
              name: pawan rai
      responses:
        '200':
          description: Edit name User success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 07:12:31 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: User profile updated successfully
                  type:
                    type: string
                    example: success
              examples:
                Edit name User success:
                  value:
                    message: User profile updated successfully
                    type: success
        '400':
          description: Edit name User Fail
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 07:12:57 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry, Body payload should not be empty
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Edit name User Fail:
                  value:
                    message: Sorry, Body payload should not be empty
                    title: Bad Request Error
                    type: error
        '401':
          description: Edit name User Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 02 Jan 2023 07:13:33 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Authentication token is missing or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Edit name User Failure:
                  value:
                    message: Sorry! Authentication token is missing or invalid
                    title: Unauthorized Error
                    type: error
  /api/user/preference:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - User Profile
      summary: Getting User Preference
      description: Getting User Preference
      operationId: gettingUserPreference
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 10:48:09 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    description:
                      type: string
                      example: >-
                        Describe email type here so that it becomes easy for
                        user to understand
                    label:
                      type: string
                      example: automation
                    name:
                      type: string
                      example: Automation Daily
                    value:
                      type: number
                      example: 0
                example:
                  - description: >-
                      Describe email type here so that it becomes easy for user
                      to understand
                    label: automation
                    name: Automation Daily
                    value: 0
                  - description: >-
                      Describe email type here so that it becomes easy for user
                      to understand
                    label: marketing
                    name: offers and deals
                    value: 0
                  - description: >-
                      Describe email type here so that it becomes easy for user
                      to understand
                    label: newsletter
                    name: Newsletters
                    value: 0
                  - description: Get notified when we release something new
                    label: product
                    name: Product Updates
                    value: 1
                  - description: >-
                      Describe email type here so that it becomes easy for user
                      to understand
                    label: weekly
                    name: Weekly Reports
                    value: 1
              examples:
                Success:
                  value:
                    - description: >-
                        Describe email type here so that it becomes easy for
                        user to understand
                      label: automation
                      name: Automation Daily
                      value: 0
                    - description: >-
                        Describe email type here so that it becomes easy for
                        user to understand
                      label: marketing
                      name: offers and deals
                      value: 0
                    - description: >-
                        Describe email type here so that it becomes easy for
                        user to understand
                      label: newsletter
                      name: Newsletters
                      value: 0
                    - description: Get notified when we release something new
                      label: product
                      name: Product Updates
                      value: 1
                    - description: >-
                        Describe email type here so that it becomes easy for
                        user to understand
                      label: weekly
                      name: Weekly Reports
                      value: 1
        '401':
          description: Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 10:48:28 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Authentication token is missing or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Failure:
                  value:
                    message: Sorry! Authentication token is missing or invalid
                    title: Unauthorized Error
                    type: error
  /api/user/preference/{product}:
    patch:
      security:
        - basicAuth: [ ]
      tags:
        - User Profile
      summary: Updating user preference
      description: Updating user preference
      operationId: updatingUserPreference
      parameters:
      - name: product
        in: path
        description: Product name
        required: true
        style: simple
        explode: false
        schema:
          type: string
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 10:49:09 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Preference is Updated successfully.
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Preference is Updated successfully.
                    type: success
        '401':
          description: Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 10:49:29 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Authentication token is missing or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Failure:
                  value:
                    message: Sorry! Authentication token is missing or invalid
                    title: Unauthorized Error
                    type: error
  /api/organization/support-access:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Support Access
      summary: Get Support Access history
      description: Get Support Access history
      operationId: getSupportAccessHistory
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 10:43:34 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  access_granted:
                    type: number
                    example: 1
                  history:
                    type: array
                    items:
                      type: object
                      properties:
                        access_granted_at:
                          type: string
                          example: '2023-01-19T19:42:54Z'
                        access_granted_by:
                          type: string
                          example: ''
                        access_revoked_at:
                          type: string
                          example: '2023-01-19T19:43:20Z'
                        access_revoked_by:
                          type: string
                          example: pawan rai
                        status:
                          type: string
                          example: Revoked
                        updated_at:
                          type: string
                          example: '2023-01-19T19:42:54Z'
                    example:
                      - access_granted_at: '2023-01-19T19:42:54Z'
                        access_granted_by: ''
                        access_revoked_at: '2023-01-19T19:43:20Z'
                        access_revoked_by: pawan rai
                        status: Revoked
                        updated_at: '2023-01-19T19:42:54Z'
                      - access_granted_at: '2023-01-19T19:43:28Z'
                        access_granted_by: ''
                        access_revoked_at: '0001-01-01T00:00:00Z'
                        access_revoked_by: pawan rai
                        status: Active
                        updated_at: '2023-01-19T19:43:28Z'
              examples:
                Success:
                  value:
                    access_granted: 1
                    history:
                      - access_granted_at: '2023-01-19T19:42:54Z'
                        access_granted_by: ''
                        access_revoked_at: '2023-01-19T19:43:20Z'
                        access_revoked_by: pawan rai
                        status: Revoked
                        updated_at: '2023-01-19T19:42:54Z'
                      - access_granted_at: '2023-01-19T19:43:28Z'
                        access_granted_by: ''
                        access_revoked_at: '0001-01-01T00:00:00Z'
                        access_revoked_by: pawan rai
                        status: Active
                        updated_at: '2023-01-19T19:43:28Z'
        '401':
          description: Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 10:43:59 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Authentication token is missing or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Failure:
                  value:
                    message: Sorry! Authentication token is missing or invalid
                    title: Unauthorized Error
                    type: error
  /api/organization/support-access/grant:
    put:
      security:
        - basicAuth: [ ]
      tags:
        - Support Access
      summary: Grant Support Access
      description: Grant Support Access
      operationId: grantSupportAccess
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 10:44:57 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Support Access Granted Successfully
                  type:
                    type: string
                    example: Success
              examples:
                Success:
                  value:
                    message: Support Access Granted Successfully
                    type: Success
        '422':
          description: Failure
          headers:
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            CF-RAY:
              schema:
                type: string
                example: 79199dee5ffc85a2-BOM
            Connection:
              schema:
                type: string
                example: keep-alive
            Content-Length:
              schema:
                type: string
                example: '103'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 10:45:14 GMT
            Server:
              schema:
                type: string
                example: cloudflare
            alt-svc:
              schema:
                type: string
                example: h3=":443"; ma=86400, h3-29=":443"; ma=86400
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Support Access already active for organization
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Failure:
                  value:
                    message: Support Access already active for organization
                    title: Bad Request Error
                    type: error
  /api/organization/support-access/revoke:
    put:
      security:
        - basicAuth: [ ]
      tags:
        - Support Access
      summary: Revoke Support Access
      description: Revoke Support Access
      operationId: revokeSupportAccess
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 10:46:37 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Support Access Revoked Successfully
                  type:
                    type: string
                    example: Success
              examples:
                Success:
                  value:
                    message: Support Access Revoked Successfully
                    type: Success
        '422':
          description: Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 10:46:13 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Support Access already Revoked for this  organization
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Failure:
                  value:
                    message: Support Access already Revoked for this  organization
                    title: Bad Request Error
                    type: error
  /api/v1/organization/group:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Groups
      summary: Create Group
      description: Create Group
      operationId: createGroup
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  example: Group1
                users:
                  type: array
                  items:
                    type: number
                    example: 499960
                allocated_concurrency:
                  type: object
                  properties:
                      prod_KUHg1I1YdCPH3Z:
                        type: number
                        example: 4
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:20:14 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Group created successfully!
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Group created successfully!
                    type: success
        '422':
          description: Invalid product ID error
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:22:31 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Given Product concurrency are invalid ,
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid product ID error:
                  value:
                    message: Sorry! Given Product concurrency are invalid ,
                    title: Bad Request Error
                    type: error
    patch:
      security:
        - basicAuth: [ ]
      tags:
        - Groups
      summary: Make Default Group
      description: Make Default Group
      operationId: makeDefaultGroup
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                group_id:
                  type: number
                  example: 1010
            example:
              group_id: 1010
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:29:02 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Default Group Updated Successfully
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Default Group Updated Successfully
                    type: success
        '422':
          description: Invalid Group ID error
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:30:02 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Error while updating org group for users
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Group ID error:
                  value:
                    message: Error while updating org group for users
                    title: Bad Request Error
                    type: error
  /api/v1/organization/groups:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Groups
      summary: Get all Groups
      description: Get all Groups
      operationId: getAllGroups
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:23:01 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: object
                    properties:
                      available_concurrency:
                        type: array
                        items:
                          type: object
                          properties:
                            key:
                              type: string
                              example: prod_KUHcM296xEk2Cy
                            product_name:
                              type: string
                              example: Manual Testing - Live
                            value:
                              type: number
                              example: 3
                        example:
                          - key: prod_KUHcM296xEk2Cy
                            product_name: Manual Testing - Live
                            value: 3
                      groups:
                        type: array
                        items:
                          type: object
                          properties:
                            allocated_concurrency:
                              type: array
                              items:
                                type: object
                                properties:
                                  key:
                                    type: string
                                    example: prod_KUHcM296xEk2Cy
                                  product_name:
                                    type: string
                                    example: Manual Testing - Live
                                  value:
                                    type: number
                                    example: 3
                              example:
                                - key: prod_KUHcM296xEk2Cy
                                  product_name: Manual Testing - Live
                                  value: 3
                            id:
                              type: number
                              example: 1011
                            is_default_group:
                              type: number
                              example: 1
                            name:
                              type: string
                              example: G1
                            service_accounts:
                              type: number
                              example: 3
                            total_users:
                              type: number
                              example: 4
                        example:
                          - allocated_concurrency:
                              - key: prod_KUHcM296xEk2Cy
                                product_name: Manual Testing - Live
                                value: 3
                            id: 1011
                            is_default_group: 1
                            name: G1
                            service_accounts: 3
                            total_users: 4
              examples:
                Success:
                  value:
                    data:
                      available_concurrency:
                        - key: prod_KUHcM296xEk2Cy
                          product_name: Manual Testing - Live
                          value: 3
                      groups:
                        - allocated_concurrency:
                            - key: prod_KUHcM296xEk2Cy
                              product_name: Manual Testing - Live
                              value: 3
                          id: 1011
                          is_default_group: 1
                          name: G1
                          service_accounts: 3
                          total_users: 4
        '401':
          description: Get All Groups Failure
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:23:17 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Authentication token is missing or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Get All Groups Failure:
                  value:
                    message: Sorry! Authentication token is missing or invalid
                    title: Unauthorized Error
                    type: error
    put:
      security:
        - basicAuth: [ ]
      tags:
        - Groups
      summary: Update multiple Group
      description: Update multiple Group
      operationId: updateMultipleGroup
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                groups:
                  type: array
                  items:
                    type: object
                    properties:
                      allocated_concurrency:
                        type: object
                        properties:
                          prod_KUHcM296xEk2Cy:
                            type: number
                            example: 4
                      id:
                        type: number
                        example: 1011
                  example:
                    - allocated_concurrency:
                        prod_KUHcM296xEk2Cy: 4
                      id: 1011
            example:
              groups:
                - allocated_concurrency:
                    prod_KUHcM296xEk2Cy: 4
                  id: 1011
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:47:45 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Group updated successfully!
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Group updated successfully!
                    type: success
        '422':
          description: Invalid Product ID'
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:48:42 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Given Product concurrency are invalid ,,
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Product ID':
                  value:
                    message: Sorry! Given Product concurrency are invalid ,,
                    title: Bad Request Error
                    type: error
  /api/v1/organization/group/{group_id}:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Groups
      summary: Get Groups By ID
      description: Get Groups By ID
      operationId: getAllGroupsById
      parameters:
      - name: group_id
        in: path
        description: Group ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:25:09 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  allocated_concurrency:
                    type: array
                    items:
                      type: object
                      properties:
                        key:
                          type: string
                          example: prod_KUHcM296xEk2Cy
                        product_name:
                          type: string
                          example: Manual Testing - Live
                        value:
                          type: number
                          example: 3
                    example:
                      - key: prod_KUHcM296xEk2Cy
                        product_name: Manual Testing - Live
                        value: 3
                  id:
                    type: number
                    example: 1011
                  is_default_group:
                    type: number
                    example: 1
                  name:
                    type: string
                    example: G1
                  service_accounts:
                    type: number
                    example: 3
                  total_users:
                    type: number
                    example: 4
                  users:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          type: number
                          example: 418070
                        username:
                          type: string
                          example: pawan rai
                    example:
                      - id: 418070
                        username: pawan rai
                      - id: 418073
                        username: pawan Admin
                      - id: 439456
                        username: pawan rai
                      - id: 462258
                        username: pawan rai
              examples:
                Success:
                  value:
                    allocated_concurrency:
                      - key: prod_KUHcM296xEk2Cy
                        product_name: Manual Testing - Live
                        value: 3
                    id: 1011
                    is_default_group: 1
                    name: G1
                    service_accounts: 3
                    total_users: 4
                    users:
                      - id: 418070
                        username: pawan rai
                      - id: 418073
                        username: pawan Admin
                      - id: 439456
                        username: pawan rai
                      - id: 462258
                        username: pawan rai
        '422':
          description: Invalid Group ID error
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:25:40 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Requested group Id 1012 doesn't belongs to the given
                      organization
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Group ID error:
                  value:
                    message: >-
                      Requested group Id 1012 doesn't belongs to the given
                      organization
                    title: Bad Request Error
                    type: error
    put:
      security:
        - basicAuth: [ ]
      tags:
        - Groups
      summary: Update Group By ID
      description: Update Group By ID
      operationId: Update Group By ID
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  example: Group1
                users:
                  type: array
                  items:
                    type: number
                    example: 499960
                allocated_concurrency:
                  type: object
                  properties:
                      prod_KUHg1I1YdCPH3Z:
                        type: number
                        example: 4
      parameters:
      - name: group_id
        in: path
        description: Group ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:31:47 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Group updated successfully!
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Group updated successfully!
                    type: success
        '422':
          description: Invalid Product ID
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:34:13 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Sorry! Given Product concurrency are invalid ,,
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Product ID:
                  value:
                    message: Sorry! Given Product concurrency are invalid ,,
                    title: Bad Request Error
                    type: error
    delete:
      security:
        - basicAuth: [ ]
      tags:
        - Groups
      summary: Delete Group
      description: Delete Group
      operationId: deleteGroup
      parameters:
      - name: group_id
        in: path
        description: Group ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Success
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:38:53 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Group deleted successfully!
                  type:
                    type: string
                    example: success
              examples:
                Success:
                  value:
                    message: Group deleted successfully!
                    type: success
        '422':
          description: Invalid Group Error
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:39:09 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Requested group Id 1012 doesn't belongs to the given
                      organization
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Group Error:
                  value:
                    message: >-
                      Requested group Id 1012 doesn't belongs to the given
                      organization
                    title: Bad Request Error
                    type: error
  /api/organization/sub-org:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - CRUD
      summary: Get Sub Organizations
      description: Get Sub Organizations
      operationId: getSubOrgs
      parameters:
        - name: expand
          in: query
          description: Expand sub-organization details
          required: false
          schema:
            type: boolean
            example: true
      responses:
        '200':
          description: Get Sub Orgs
          headers:
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:07:32 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: object
                    properties:
                      root_org:
                        type: object
                        properties:
                          available_concurrency:
                            type: array
                            items:
                              type: object
                              properties:
                                key:
                                  type: string
                                  example: prod_KUHcM296xEk2Cy
                                product_name:
                                  type: string
                                  example: Manual Testing - Live
                                value:
                                  type: number
                                  example: 0
                            example:
                              - key: prod_KUHcM296xEk2Cy
                                product_name: Manual Testing - Live
                                value: 0
                              - key: prod_KVAmU3gGH3RkiD
                                product_name: Manual Testing - Real Devices
                                value: 3
                              - key: prod_KUHg1I1YdCPH3Z
                                product_name: Web Automation on Desktop
                                value: 3
                              - key: prod_KVAoeaYoNyEjfn_linux
                                product_name: HyperExecute Cloud (Linux Only)
                                value: 9
                              - key: prod_KVAntn3WDiTl2j
                                product_name: Native App Automation (Trial)
                                value: 7
                          created_at:
                            type: string
                            example: '2022-12-02T14:17:28Z'
                          name:
                            type: string
                            example: '100'
                          org_id:
                            type: number
                            example: 166750
                      sub_orgs:
                        type: array
                        items:
                          type: object
                          properties:
                            allocated_concurrency:
                              type: array
                              items:
                                type: object
                                properties:
                                  key:
                                    type: string
                                    example: prod_KVAoeaYoNyEjfn_linux
                                  product_name:
                                    type: string
                                    example: ''
                                  value:
                                    type: number
                                    example: 1
                              example:
                                - key: prod_KVAoeaYoNyEjfn_linux
                                  product_name: ''
                                  value: 1
                                - key: prod_KVAntn3WDiTl2j
                                  product_name: ''
                                  value: 3
                                - key: prod_KUHcM296xEk2Cy
                                  product_name: Manual Testing - Live
                                  value: 1
                            created_at:
                              type: string
                              example: '2023-01-25T18:49:29Z'
                            name:
                              type: string
                              example: SubOrg 1
                            org_id:
                              type: number
                              example: 166849
                            service_account_count:
                              type: number
                              example: 0
                            service_accounts:
                              type: array
                              items: {}
                              example: []
                            user_count:
                              type: number
                              example: 0
                            users:
                              type: array
                              items: {}
                              example: []
                        example:
                          - allocated_concurrency:
                              - key: prod_KVAoeaYoNyEjfn_linux
                                product_name: ''
                                value: 1
                              - key: prod_KVAntn3WDiTl2j
                                product_name: ''
                                value: 3
                              - key: prod_KUHcM296xEk2Cy
                                product_name: Manual Testing - Live
                                value: 1
                            created_at: '2023-01-25T18:49:29Z'
                            name: SubOrg 1
                            org_id: 166849
                            service_account_count: 0
                            service_accounts: []
                            user_count: 0
                            users: []
                          - allocated_concurrency:
                              - key: prod_NFR_nonrec
                                product_name: ''
                                value: 2
                            created_at: '2023-01-25T18:56:33Z'
                            name: SubOrg 1
                            org_id: 166850
                            service_account_count: 0
                            service_accounts: []
                            user_count: 0
                            users: []
                          - allocated_concurrency:
                              - key: prod_NFR_nonrec
                                product_name: ''
                                value: 2
                            created_at: '2023-01-25T19:17:39Z'
                            name: SubOrg 2
                            org_id: 166851
                            service_account_count: 0
                            service_accounts: []
                            user_count: 0
                            users: []
                          - allocated_concurrency:
                              - key: prod_NFR_nonrec
                                product_name: ''
                                value: 2
                              - key: prod_KUHcM296xEk2Cy
                                product_name: ''
                                value: 1
                              - key: prod_KVAmU3gGH3RkiD
                                product_name: ''
                                value: 1
                              - key: prod_KUHg1I1YdCPH3Z
                                product_name: ''
                                value: 1
                            created_at: '2023-01-27T16:00:32Z'
                            name: SubOrg 2
                            org_id: 166852
                            service_account_count: 0
                            service_accounts: []
                            user_count: 0
                            users: []
                          - allocated_concurrency:
                              - key: prod_KVAmU3gGH3RkiD
                                product_name: ''
                                value: 1
                              - key: prod_KUHg1I1YdCPH3Z
                                product_name: ''
                                value: 1
                              - key: prod_NFR_nonrec
                                product_name: ''
                                value: 2
                              - key: prod_KUHcM296xEk2Cy
                                product_name: ''
                                value: 1
                            created_at: '2023-01-27T16:03:34Z'
                            name: SubOrg 2
                            org_id: 166853
                            service_account_count: 0
                            service_accounts: []
                            user_count: 0
                            users: []
                          - allocated_concurrency:
                              - key: prod_KUHcM296xEk2Cy
                                product_name: ''
                                value: 1
                              - key: prod_KVAmU3gGH3RkiD
                                product_name: ''
                                value: 1
                              - key: prod_KUHg1I1YdCPH3Z
                                product_name: ''
                                value: 1
                              - key: prod_NFR_nonrec
                                product_name: ''
                                value: 2
                            created_at: '2023-01-27T16:06:14Z'
                            name: SubOrg 2
                            org_id: 166854
                            service_account_count: 0
                            service_accounts: []
                            user_count: 0
                            users: []
                          - allocated_concurrency:
                              - key: prod_KUHcM296xEk2Cy
                                product_name: ''
                                value: 1
                              - key: prod_KVAmU3gGH3RkiD
                                product_name: ''
                                value: 1
                              - key: prod_KUHg1I1YdCPH3Z
                                product_name: ''
                                value: 1
                            created_at: '2023-01-27T16:09:54Z'
                            name: SubOrg 2
                            org_id: 166855
                            service_account_count: 0
                            service_accounts: []
                            user_count: 0
                            users: []
                          - allocated_concurrency:
                              - key: prod_KUHcM296xEk2Cy
                                product_name: Manual Testing - Live
                                value: 1
                              - key: prod_KVAmU3gGH3RkiD
                                product_name: Manual Testing - Real Devices
                                value: 1
                              - key: prod_KUHg1I1YdCPH3Z
                                product_name: Web Automation on Desktop
                                value: 1
                            created_at: '2023-01-27T16:11:12Z'
                            name: SubOrg 2
                            org_id: 166856
                            service_account_count: 1
                            service_accounts:
                              - id: 78101
                                name: rishab service
                                role: Guest
                                status: Active
                            user_count: 0
                            users: []
                          - allocated_concurrency:
                              - key: prod_KUHcM296xEk2Cy
                                product_name: Manual Testing - Live
                                value: 1
                              - key: prod_KVAmU3gGH3RkiD
                                product_name: Manual Testing - Real Devices
                                value: 1
                              - key: prod_KUHg1I1YdCPH3Z
                                product_name: Web Automation on Desktop
                                value: 1
                            created_at: '2023-01-30T11:00:05Z'
                            name: SubOrg 2
                            org_id: 166857
                            service_account_count: 0
                            service_accounts: []
                            user_count: 0
                            users: []
                          - allocated_concurrency:
                              - key: prod_KUHcM296xEk2Cy
                                product_name: Manual Testing - Live
                                value: 1
                              - key: prod_KVAmU3gGH3RkiD
                                product_name: Manual Testing - Real Devices
                                value: 1
                              - key: prod_KUHg1I1YdCPH3Z
                                product_name: Web Automation on Desktop
                                value: 1
                            created_at: '2023-01-30T11:00:10Z'
                            name: SubOrg 2
                            org_id: 166858
                            service_account_count: 0
                            service_accounts: []
                            user_count: 0
                            users: []
                          - allocated_concurrency:
                              - key: prod_KUHcM296xEk2Cy
                                product_name: Manual Testing - Live
                                value: 2
                            created_at: '2023-01-30T11:00:36Z'
                            name: SubOrg 1
                            org_id: 166859
                            service_account_count: 0
                            service_accounts: []
                            user_count: 0
                            users: []
              examples:
                Get Sub Orgs:
                  value:
                    data:
                      root_org:
                        available_concurrency:
                          - key: prod_KUHcM296xEk2Cy
                            product_name: Manual Testing - Live
                            value: 0
                          - key: prod_KVAmU3gGH3RkiD
                            product_name: Manual Testing - Real Devices
                            value: 3
                          - key: prod_KUHg1I1YdCPH3Z
                            product_name: Web Automation on Desktop
                            value: 3
                          - key: prod_KVAoeaYoNyEjfn_linux
                            product_name: HyperExecute Cloud (Linux Only)
                            value: 9
                          - key: prod_KVAntn3WDiTl2j
                            product_name: Native App Automation (Trial)
                            value: 7
                        created_at: '2022-12-02T14:17:28Z'
                        name: '100'
                        org_id: 166750
                      sub_orgs:
                        - allocated_concurrency:
                            - key: prod_KVAoeaYoNyEjfn_linux
                              product_name: ''
                              value: 1
                            - key: prod_KVAntn3WDiTl2j
                              product_name: ''
                              value: 3
                            - key: prod_KUHcM296xEk2Cy
                              product_name: Manual Testing - Live
                              value: 1
                          created_at: '2023-01-25T18:49:29Z'
                          name: SubOrg 1
                          org_id: 166849
                          service_account_count: 0
                          service_accounts: []
                          user_count: 0
                          users: []
                        - allocated_concurrency:
                            - key: prod_NFR_nonrec
                              product_name: ''
                              value: 2
                          created_at: '2023-01-25T18:56:33Z'
                          name: SubOrg 1
                          org_id: 166850
                          service_account_count: 0
                          service_accounts: []
                          user_count: 0
                          users: []
                        - allocated_concurrency:
                            - key: prod_NFR_nonrec
                              product_name: ''
                              value: 2
                          created_at: '2023-01-25T19:17:39Z'
                          name: SubOrg 2
                          org_id: 166851
                          service_account_count: 0
                          service_accounts: []
                          user_count: 0
                          users: []
                        - allocated_concurrency:
                            - key: prod_NFR_nonrec
                              product_name: ''
                              value: 2
                            - key: prod_KUHcM296xEk2Cy
                              product_name: ''
                              value: 1
                            - key: prod_KVAmU3gGH3RkiD
                              product_name: ''
                              value: 1
                            - key: prod_KUHg1I1YdCPH3Z
                              product_name: ''
                              value: 1
                          created_at: '2023-01-27T16:00:32Z'
                          name: SubOrg 2
                          org_id: 166852
                          service_account_count: 0
                          service_accounts: []
                          user_count: 0
                          users: []
                        - allocated_concurrency:
                            - key: prod_KVAmU3gGH3RkiD
                              product_name: ''
                              value: 1
                            - key: prod_KUHg1I1YdCPH3Z
                              product_name: ''
                              value: 1
                            - key: prod_NFR_nonrec
                              product_name: ''
                              value: 2
                            - key: prod_KUHcM296xEk2Cy
                              product_name: ''
                              value: 1
                          created_at: '2023-01-27T16:03:34Z'
                          name: SubOrg 2
                          org_id: 166853
                          service_account_count: 0
                          service_accounts: []
                          user_count: 0
                          users: []
                        - allocated_concurrency:
                            - key: prod_KUHcM296xEk2Cy
                              product_name: ''
                              value: 1
                            - key: prod_KVAmU3gGH3RkiD
                              product_name: ''
                              value: 1
                            - key: prod_KUHg1I1YdCPH3Z
                              product_name: ''
                              value: 1
                            - key: prod_NFR_nonrec
                              product_name: ''
                              value: 2
                          created_at: '2023-01-27T16:06:14Z'
                          name: SubOrg 2
                          org_id: 166854
                          service_account_count: 0
                          service_accounts: []
                          user_count: 0
                          users: []
                        - allocated_concurrency:
                            - key: prod_KUHcM296xEk2Cy
                              product_name: ''
                              value: 1
                            - key: prod_KVAmU3gGH3RkiD
                              product_name: ''
                              value: 1
                            - key: prod_KUHg1I1YdCPH3Z
                              product_name: ''
                              value: 1
                          created_at: '2023-01-27T16:09:54Z'
                          name: SubOrg 2
                          org_id: 166855
                          service_account_count: 0
                          service_accounts: []
                          user_count: 0
                          users: []
                        - allocated_concurrency:
                            - key: prod_KUHcM296xEk2Cy
                              product_name: Manual Testing - Live
                              value: 1
                            - key: prod_KVAmU3gGH3RkiD
                              product_name: Manual Testing - Real Devices
                              value: 1
                            - key: prod_KUHg1I1YdCPH3Z
                              product_name: Web Automation on Desktop
                              value: 1
                          created_at: '2023-01-27T16:11:12Z'
                          name: SubOrg 2
                          org_id: 166856
                          service_account_count: 1
                          service_accounts:
                            - id: 78101
                              name: rishab service
                              role: Guest
                              status: Active
                          user_count: 0
                          users: []
                        - allocated_concurrency:
                            - key: prod_KUHcM296xEk2Cy
                              product_name: Manual Testing - Live
                              value: 1
                            - key: prod_KVAmU3gGH3RkiD
                              product_name: Manual Testing - Real Devices
                              value: 1
                            - key: prod_KUHg1I1YdCPH3Z
                              product_name: Web Automation on Desktop
                              value: 1
                          created_at: '2023-01-30T11:00:05Z'
                          name: SubOrg 2
                          org_id: 166857
                          service_account_count: 0
                          service_accounts: []
                          user_count: 0
                          users: []
                        - allocated_concurrency:
                            - key: prod_KUHcM296xEk2Cy
                              product_name: Manual Testing - Live
                              value: 1
                            - key: prod_KVAmU3gGH3RkiD
                              product_name: Manual Testing - Real Devices
                              value: 1
                            - key: prod_KUHg1I1YdCPH3Z
                              product_name: Web Automation on Desktop
                              value: 1
                          created_at: '2023-01-30T11:00:10Z'
                          name: SubOrg 2
                          org_id: 166858
                          service_account_count: 0
                          service_accounts: []
                          user_count: 0
                          users: []
                        - allocated_concurrency:
                            - key: prod_KUHcM296xEk2Cy
                              product_name: Manual Testing - Live
                              value: 2
                          created_at: '2023-01-30T11:00:36Z'
                          name: SubOrg 1
                          org_id: 166859
                          service_account_count: 0
                          service_accounts: []
                          user_count: 0
                          users: []
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - CRUD
      summary: Create Sub Organization
      description: Create Sub Organization
      operationId: createSubOrg
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                allocated_concurrency:
                  type: object
                  properties:
                    prod_KUHcM296xEk2Cy:
                      type: number
                      example: 1
                    prod_KUHg1I1YdCPH3Z:
                      type: number
                      example: 1
                    prod_KVAmU3gGH3RkiD:
                      type: number
                      example: 1
                    prod_KVAntn3WDiTl2j:
                      type: number
                      example: 0
                    prod_KVAoeaYoNyEjfn_linux:
                      type: number
                      example: 0
                    prod_NFR_nonrec:
                      type: number
                      example: 0
                name:
                  type: string
                  example: SubOrg 2
            example:
              allocated_concurrency:
                prod_KUHcM296xEk2Cy: 1
                prod_KUHg1I1YdCPH3Z: 1
                prod_KVAmU3gGH3RkiD: 1
                prod_KVAntn3WDiTl2j: 0
                prod_KVAoeaYoNyEjfn_linux: 0
                prod_NFR_nonrec: 0
              name: SubOrg 2
      responses:
        '200':
          description: Create Sub Org
          headers:
            Content-Length:
              schema:
                type: string
                example: '47'
            Date:
              schema:
                type: string
                example: Tue, 10 Jan 2023 11:57:24 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Created Sub-Organisation Successfully
                  type:
                    type: string
                    example: success
                  sub_org_id:
                    type: integer
                    example: 45005
              examples:
                Create Sub Org:
                  value:
                    message: Created Sub-Organisation Successfully
                    type: success
                    sub_org_id: 45005
        '400':
          description: Invalid Concurrency
          headers:
            Content-Length:
              schema:
                type: string
                example: '125'
            Date:
              schema:
                type: string
                example: Thu, 12 Jan 2023 05:18:40 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Invalid Concurrency Valur for Key -
                      prod_KUHcM296xEk2Cy
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Concurrency:
                  value:
                    message: >-
                      Invalid Concurrency Valur for Key -
                      prod_KUHcM296xEk2Cy
                    title: Bad Request Error
                    type: error
    put:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - CRUD
      summary: Bulk Update Sub Org
      description: Bulk Update Sub Org
      operationId: bulkUpdateSubOrg
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                sub_orgs:
                  type: array
                  items:
                    type: object
                    properties:
                      allocated_concurrency:
                        type: object
                        properties:
                          prod_NFR:
                            type: number
                            example: 3
                      id:
                        type: number
                        example: 1000000011
                      name:
                        type: string
                        example: Suborg 1 update m1
                  example:
                    - allocated_concurrency:
                        prod_NFR: 3
                      id: 1000000011
                      name: Suborg 1 update m1
                    - allocated_concurrency:
                        prod_NFR: 4
                      id: 1000000010
                      name: Suborg 2 update m2
            example:
              sub_orgs:
                - allocated_concurrency:
                    prod_NFR: 3
                  id: 1000000011
                  name: Suborg 1 update m1
                - allocated_concurrency:
                    prod_NFR: 4
                  id: 1000000010
                  name: Suborg 2 update m2
      responses:
        '200':
          description: Bulk Update Sub Org
          headers:
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            CF-RAY:
              schema:
                type: string
                example: 7b7156626e531d95-BLR
            Connection:
              schema:
                type: string
                example: keep-alive
            Content-Encoding:
              schema:
                type: string
                example: br
            Date:
              schema:
                type: string
                example: Thu, 13 Apr 2023 05:34:02 GMT
            Server:
              schema:
                type: string
                example: cloudflare
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Updated Sub-Organisation Successfully
                  type:
                    type: string
                    example: success
              examples:
                Bulk Update Sub Org:
                  value:
                    message: Updated Sub-Organisation Successfully
                    type: success
        '403':
          description: Logged In User Does Not Belong To Sub Org
          headers:
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            CF-RAY:
              schema:
                type: string
                example: 7bce38ea2a571d1c-BLR
            Connection:
              schema:
                type: string
                example: keep-alive
            Content-Encoding:
              schema:
                type: string
                example: br
            Date:
              schema:
                type: string
                example: Mon, 24 Apr 2023 12:06:49 GMT
            Server:
              schema:
                type: string
                example: cloudflare
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Logged in user does not belong to a Sub-Organisation
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Logged In User Does Not Belong To Sub Org:
                  value:
                    message: Logged in user does not belong to a Sub-Organisation
                    title: Unauthorized Error
                    type: error
        '422':
          description: Invalid Concurrency
          headers:
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            CF-RAY:
              schema:
                type: string
                example: 7bce3b62ce8326b9-BLR
            Connection:
              schema:
                type: string
                example: keep-alive
            Content-Length:
              schema:
                type: string
                example: '110'
            Date:
              schema:
                type: string
                example: Mon, 24 Apr 2023 12:08:30 GMT
            Server:
              schema:
                type: string
                example: cloudflare
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Provided Concurrency Invalid for Not For Resale (NFR)
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Concurrency:
                  value:
                    message: Provided Concurrency Invalid for Not For Resale (NFR)
                    title: Bad Request Error
                    type: error

  /api/organization/sub-org/{sub_org_id}:
    put:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - CRUD
      summary: Update Sub Organization By ID
      description: Update Sub Organization By ID
      operationId: updateSubOrgById
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                allocated_concurrency:
                  type: object
                  properties:
                    prod_KUHcM296xEk2Cy:
                      type: number
                      example: 2
                    prod_KUHg1I1YdCPH3Z:
                      type: number
                      example: 0
                    prod_KVAmU3gGH3RkiD:
                      type: number
                      example: 0
                    prod_KVAntn3WDiTl2j:
                      type: number
                      example: 0
                    prod_KVAoeaYoNyEjfn_linux:
                      type: number
                      example: 0
                    prod_NFR_nonrec:
                      type: number
                      example: 0
                name:
                  type: string
                  example: SubOrg 1
            example:
              allocated_concurrency:
                prod_KUHcM296xEk2Cy: 2
                prod_KUHg1I1YdCPH3Z: 0
                prod_KVAmU3gGH3RkiD: 0
                prod_KVAntn3WDiTl2j: 0
                prod_KVAoeaYoNyEjfn_linux: 0
                prod_NFR_nonrec: 0
              name: SubOrg 1
      responses:
        '200':
          description: Update Sub Org
          headers:
            Content-Length:
              schema:
                type: string
                example: '47'
            Date:
              schema:
                type: string
                example: Thu, 12 Jan 2023 05:30:32 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Updated Sub-Organisation Successfully
                  type:
                    type: string
                    example: success
              examples:
                Update Sub Org:
                  value:
                    message: Updated Sub-Organisation Successfully
                    type: success
        '400':
          description: Invalid Concurrency
          headers:
            Content-Length:
              schema:
                type: string
                example: '125'
            Date:
              schema:
                type: string
                example: Thu, 12 Jan 2023 05:29:08 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Invalid Concurrency Value for Key -
                      prod_KUHcM296xEk2Cy
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Concurrency:
                  value:
                    message: >-
                      Invalid Concurrency Value for Key -
                      prod_KUHcM296xEk2Cy
                    title: Bad Request Error
                    type: error
    delete:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization 
          - CRUD
      summary: Delete Sub Organization By ID
      description: Delete Sub Organization By ID
      operationId: deleteSubOrgById
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Delete Sub Org By ID
          headers:
            Content-Length:
              schema:
                type: string
                example: '47'
            Date:
              schema:
                type: string
                example: Thu, 12 Jan 2023 05:35:15 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Deleted Sub-Organisation Successfully
                  type:
                    type: string
                    example: success
              examples:
                Delete Sub Org By ID:
                  value:
                    message: Deleted Sub-Organisation Successfully
                    type: success
        '401':
          description: Not Found
          headers:
            Content-Length:
              schema:
                type: string
                example: '84'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:15:05 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Record not found in our db
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Not Found:
                  value:
                    message: Record not found in our db
                    title: Unauthorized Error
                    type: error
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization 
          - CRUD
      summary: Get Sub Organization By ID
      description: Get Sub Organization By ID
      operationId: getSubOrgById
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Get Sub Org By ID
          headers:
            Content-Length:
              schema:
                type: string
                example: '273'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:06:24 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: object
                    properties:
                      allocated_concurrency:
                        type: array
                        items:
                          type: object
                          properties:
                            key:
                              type: string
                              example: prod_KUHcM296xEk2Cy
                            product_name:
                              type: string
                              example: Manual Testing - Live
                            value:
                              type: number
                              example: 2
                        example:
                          - key: prod_KUHcM296xEk2Cy
                            product_name: Manual Testing - Live
                            value: 2
                      created_at:
                        type: string
                        example: '2023-01-30T11:00:36Z'
                      name:
                        type: string
                        example: SubOrg 1
                      org_id:
                        type: number
                        example: 166859
                      service_account_count:
                        type: number
                        example: 0
                      service_accounts:
                        type: array
                        items: {}
                        example: []
                      user_count:
                        type: number
                        example: 0
                      users:
                        type: array
                        items: {}
                        example: []
              examples:
                Get Sub Org By ID:
                  value:
                    data:
                      allocated_concurrency:
                        - key: prod_KUHcM296xEk2Cy
                          product_name: Manual Testing - Live
                          value: 2
                      created_at: '2023-01-30T11:00:36Z'
                      name: SubOrg 1
                      org_id: 166859
                      service_account_count: 0
                      service_accounts: []
                      user_count: 0
                      users: []
        '422':
          description: Wrong Org Details
          headers:
            Content-Length:
              schema:
                type: string
                example: '133'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:08:56 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Something went wrong! getting organization details db
                      error-%s of given user
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Wrong Org Details:
                  value:
                    message: >-
                      Something went wrong! getting organization details db
                      error-%s of given user
                    title: Bad Request Error
                    type: error
  /api/organization/sub-org/{sub_org_id}/invites/users:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Invite Users
      summary: Invite Users to Sub Organization
      description: Invite Users to Sub Organization
      operationId: inviteUsersToSubOrg
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          application/json:
            schema:
              type: array
              items:
                type: object
                properties:
                  email:
                    type: string
                    example: pawan12@qiott.com
                  role:
                    type: string
                    example: Admin
              example:
                - email: pawan12@qiott.com
                  role: Admin
            example:
              - email: pawan12@qiott.com
                role: Admin
      responses:
        '200':
          description: Invite Users to Sub Org
          headers:
            Content-Length:
              schema:
                type: string
                example: '56'
            Date:
              schema:
                type: string
                example: Fri, 20 Jan 2023 12:44:34 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Invite Sent Successfully
                  type:
                    type: string
                    example: success
              examples:
                Invite Users to Sub Org:
                  value:
                    message: Invite Sent Successfully
                    type: success
        '422':
          description: Invalid Role
          headers:
            Content-Length:
              schema:
                type: string
                example: '109'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:16:37 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: array
                    items:
                      type: object
                      properties:
                        email:
                          type: string
                          example: pawan12@qiott.com
                        error:
                          type: string
                          example: Invalid role
                    example:
                      - email: pawan12@qiott.com
                        error: Invalid role
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Role:
                  value:
                    message:
                      - email: pawan12@qiott.com
                        error: Invalid role
                    title: Bad Request Error
                    type: error
  /api/organization/sub-org/{sub_org_id}/invites:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Invite Users
      summary: Get Pending Invites for Sub Organization
      description: Get Pending Invites for Sub Organization
      operationId: getPendingInvitesForSuborg
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Get Pending Invites for SubOrg
          headers:
            Content-Length:
              schema:
                type: string
                example: '234'
            Date:
              schema:
                type: string
                example: Fri, 20 Jan 2023 16:19:57 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      type: object
                      properties:
                        group:
                          nullable: true
                          example: null
                        id:
                          type: number
                          example: 4634
                        recipient_email:
                          type: string
                          example: rishabhagrawal@lambdatest.com
                        role:
                          type: string
                          example: User
                        sender:
                          type: object
                          properties:
                            email:
                              type: string
                              example: abhishekj@lambdatest.com
                            id:
                              type: number
                              example: 99604
                            name:
                              type: string
                              example: backend testing
                        sent_at:
                          type: string
                          example: '2023-01-20T12:44:34Z'
                        status:
                          type: string
                          example: Pending
                    example:
                      - group: null
                        id: 4634
                        recipient_email: rishabhagrawal@lambdatest.com
                        role: User
                        sender:
                          email: abhishekj@lambdatest.com
                          id: 99604
                          name: backend testing
                        sent_at: '2023-01-20T12:44:34Z'
                        status: Pending
              examples:
                Get Pending Invites for SubOrg:
                  value:
                    data:
                      - group: null
                        id: 4634
                        recipient_email: rishabhagrawal@lambdatest.com
                        role: User
                        sender:
                          email: abhishekj@lambdatest.com
                          id: 99604
                          name: backend testing
                        sent_at: '2023-01-20T12:44:34Z'
                        status: Pending
  /api/organization/sub-org/{sub_org_id}/invite/{invite_id}:
    put:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Invite Users
      summary: Resend Invite
      description: Resend Invite
      operationId: resendInvite1
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: invite_id
        in: path
        description: Invitation ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Resend Invite
          headers:
            Content-Length:
              schema:
                type: string
                example: '63'
            Date:
              schema:
                type: string
                example: Sat, 21 Jan 2023 04:49:27 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Resent Invitiation Successfully
                  type:
                    type: string
                    example: success
              examples:
                Resend Invite:
                  value:
                    message: Resent Invitiation Successfully
                    type: success
    delete:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Invite Users
      summary: Withdraw Invite
      description: Withdraw Invite
      operationId: withdrawInvite
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: invite_id
        in: path
        description: Invitation ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Withdraw Invite
          headers:
            Content-Length:
              schema:
                type: string
                example: '64'
            Date:
              schema:
                type: string
                example: Sat, 21 Jan 2023 05:01:33 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Invite user deleted Successfully
                  type:
                    type: string
                    example: success
              examples:
                Withdraw Invite:
                  value:
                    message: Invite user deleted Successfully
                    type: success
        '403':
          description: Withdraw Expired Invite
          headers:
            Content-Length:
              schema:
                type: string
                example: '147'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:18:21 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Withdraw Expired Invite:
                  value:
                    message: >-
                      Please, contact administration as you don't have right
                      privileges to permform this action
                    title: Unauthorized Error
                    type: error
  /api/organization/sub-org/{sub_org_id}/users/{user_id}/token:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Token
      summary: Get User Token
      description: Get User Token
      operationId: getUserToken
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: user_id
        in: path
        description: Sub Org User ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Get User Token
          headers:
            Content-Length:
              schema:
                type: string
                example: '187'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:38:36 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Access Token retrieved successfully
                  token:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 34317
                      token:
                        type: string
                        example: gfTFHh60awsoDrWeTY21HmEUQUsi1vef1k8acKWT36mjT1qVkn
                      user_id:
                        type: number
                        example: 11954
                      username:
                        type: string
                        example: rishabha
                  type:
                    type: string
                    example: success
              examples:
                Get User Token:
                  value:
                    message: Access Token retrieved successfully
                    token:
                      id: 34317
                      token: gfTFHh60awsoDrWeTY21HmEUQUsi1vef1k8acKWT36mjT1qVkn
                      user_id: 11954
                      username: rishabha
                    type: success
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Token
      summary: Regenerate User Token
      description: Regenerate User Token
      operationId: regenerateUserToken
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: user_id
        in: path
        description: Sub Org User ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          text/plain:
            example: ''
      responses:
        '200':
          description: Regenerate User Token
          headers:
            Content-Length:
              schema:
                type: string
                example: '193'
            Date:
              schema:
                type: string
                example: Sun, 22 Jan 2023 11:27:31 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Access Token generated successfully
                  token:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 34329
                      token:
                        type: string
                        example: Gk6AP0DuLwPOL6f6comvg4Oxxau7MZW3mQ5wpW9EKjOcOXeCrx
                      user_id:
                        type: number
                        example: 78101
                      username:
                        type: string
                        example: rishabhagrawal
                  type:
                    type: string
                    example: success
              examples:
                Regenerate User Token:
                  value:
                    message: Access Token generated successfully
                    token:
                      id: 34329
                      token: Gk6AP0DuLwPOL6f6comvg4Oxxau7MZW3mQ5wpW9EKjOcOXeCrx
                      user_id: 78101
                      username: rishabhagrawal
                    type: success
  /api/organization/sub-org/{sub_org_id}/users/{user_id}:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - User
      summary: Update User
      description: Update User
      operationId: updateUser
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: user_id
        in: path
        description: Sub Org User ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                role:
                  type: string
                  example: Admin
            example:
              role: Admin
      responses:
        '200':
          description: Update User SubOrg
          headers:
            Content-Length:
              schema:
                type: string
                example: '65'
            Date:
              schema:
                type: string
                example: Sun, 22 Jan 2023 11:29:50 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: User profile updated successfully
                  type:
                    type: string
                    example: success
              examples:
                Update User SubOrg:
                  value:
                    message: User profile updated successfully
                    type: success
        '422':
          description: Invalid Role
          headers:
            Content-Length:
              schema:
                type: string
                example: '119'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:37:23 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  errors:
                    type: object
                    properties:
                      team_user_role:
                        type: array
                        items:
                          type: string
                          example: Please enter a valid user role
                        example:
                          - Please enter a valid user role
                  message:
                    type: string
                    example: The given data was invalid.
                  type:
                    type: string
                    example: error
              examples:
                Invalid Role:
                  value:
                    errors:
                      team_user_role:
                        - Please enter a valid user role
                    message: The given data was invalid.
                    type: error
    delete:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - User
      summary: Delete Sub Organization User
      description: Delete Sub Organization User
      operationId: deleteUserSuborg
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: user_id
        in: path
        description: Sub Org User ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Delete User SubOrg
          headers:
            Content-Length:
              schema:
                type: string
                example: '57'
            Date:
              schema:
                type: string
                example: Sun, 22 Jan 2023 12:18:49 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: User deleted Successfully
                  type:
                    type: string
                    example: success
              examples:
                Delete User SubOrg:
                  value:
                    message: User deleted Successfully
                    type: success
  /api/organization/sub-org/{sub_org_id}/users/{user_id}/password:
    patch:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - User
      summary: Update User Password By Admin
      description: Update User Password By Admin
      operationId: updateUserPasswordByAdmin
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: user_id
        in: path
        description: Sub Org User ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                confirm_password:
                  type: string
                  example: ppoodeikj2
                new_password:
                  type: string
                  example: ppoodeikj2
            example:
              confirm_password: ppoodeikj2
              new_password: ppoodeikj2
      responses:
        '200':
          description: Update User Password By Admin
          headers:
            Content-Length:
              schema:
                type: string
                example: '61'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:40:18 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Password changed successfully
                  type:
                    type: string
                    example: success
              examples:
                Update User Password By Admin:
                  value:
                    message: Password changed successfully
                    type: success
  /api/organization/sub-org/{sub_org_id}/service-accounts/{id}/token:
    get:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Service Account
      summary: Get Service Account Token
      description: Get Service Account Token
      operationId: getServiceAccountToken
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: id
        in: path
        description: Sub Org Service Account ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Get Service Account Token
          headers:
            Content-Length:
              schema:
                type: string
                example: '193'
            Date:
              schema:
                type: string
                example: Sun, 22 Jan 2023 11:39:16 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Access Token retrieved successfully
                  token:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 34329
                      token:
                        type: string
                        example: Gk6AP0DuLwPOL6f6comvg4Oxxau7MZW3mQ5wpW9EKjOcOXeCrx
                      user_id:
                        type: number
                        example: 78101
                      username:
                        type: string
                        example: rishabhagrawal
                  type:
                    type: string
                    example: success
              examples:
                Get Service Account Token:
                  value:
                    message: Access Token retrieved successfully
                    token:
                      id: 34329
                      token: Gk6AP0DuLwPOL6f6comvg4Oxxau7MZW3mQ5wpW9EKjOcOXeCrx
                      user_id: 78101
                      username: rishabhagrawal
                    type: success
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Service Account
      summary: Regenerate Service Account Token
      description: Regenerate Service Account Token
      operationId: regenerateServiceAccountToken
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: id
        in: path
        description: Sub Org Service Account ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          text/plain:
            example: ''
      responses:
        '200':
          description: Regenerate Service Account Token
          headers:
            Content-Length:
              schema:
                type: string
                example: '193'
            Date:
              schema:
                type: string
                example: Sun, 22 Jan 2023 11:41:26 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Access Token generated successfully
                  token:
                    type: object
                    properties:
                      id:
                        type: number
                        example: 34330
                      token:
                        type: string
                        example: Hu8NsHTDT9gT4e1GQFchGrjZqrnHVqf3XahHnjn2wzNTgMQ0XZ
                      user_id:
                        type: number
                        example: 78101
                      username:
                        type: string
                        example: rishabhagrawal
                  type:
                    type: string
                    example: success
              examples:
                Regenerate Service Account Token:
                  value:
                    message: Access Token generated successfully
                    token:
                      id: 34330
                      token: Hu8NsHTDT9gT4e1GQFchGrjZqrnHVqf3XahHnjn2wzNTgMQ0XZ
                      user_id: 78101
                      username: rishabhagrawal
                    type: success
  /api/organization/sub-org/{sub_org_id}/service-accounts:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Service Account
      summary: Create Service Account
      description: Create Service Account
      operationId: createServiceAccounts
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  example: Test Service Account
            example:
              name: Test Service Account
      responses:
        '200':
          description: Create Service Account
          headers:
            Content-Length:
              schema:
                type: string
                example: '98'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:21:51 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Service Account Created SuccessFully
                  name:
                    type: string
                    example: Test Service Account
                  type:
                    type: string
                    example: success
              examples:
                Create Service Account:
                  value:
                    message: Service Account Created SuccessFully
                    name: Test Service Account
                    type: success
        '422':
          description: Invalid Org
          headers:
            Content-Length:
              schema:
                type: string
                example: '133'
            Date:
              schema:
                type: string
                example: Mon, 30 Jan 2023 11:22:08 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Something went wrong! getting organization details db
                      error-%s of given user
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Org:
                  value:
                    message: >-
                      Something went wrong! getting organization details db
                      error-%s of given user
                    title: Bad Request Error
                    type: error
  /api/organization/sub-org/{sub_org_id}/service-accounts/{id}:
    put:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Service Account
      summary: Update Service Account
      description: Update Service Account
      operationId: updateServiceAccounts
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: id
        in: path
        description: Sub Org Service Account ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  example: rishab service 2
            example:
              name: rishab service 2
      responses:
        '200':
          description: Update Service Account
          headers:
            Content-Length:
              schema:
                type: string
                example: '68'
            Date:
              schema:
                type: string
                example: Sun, 22 Jan 2023 11:42:23 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Service Account updated successfully
                  type:
                    type: string
                    example: success
              examples:
                Update Service Account:
                  value:
                    message: Service Account updated successfully
                    type: success
    delete:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - Service Account
      summary: Delete Service Account
      description: Delete Service Account
      operationId: deleteServiceAccounts
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      - name: id
        in: path
        description: Sub Org Service Account ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      responses:
        '200':
          description: Delete Service Account
          headers:
            Content-Length:
              schema:
                type: string
                example: '68'
            Date:
              schema:
                type: string
                example: Sun, 22 Jan 2023 11:53:04 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Service Account Deleted SuccessFully
                  type:
                    type: string
                    example: success
              examples:
                Delete Service Account:
                  value:
                    message: Service Account Deleted SuccessFully
                    type: success                  
  /api/organization/sub-org/{sub_org_id}/move-account:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - User
      summary: Move user to Sub Organization 
      description: Move user to Sub Organization 
      operationId: moveUserToSubOrg
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        description: Move user to Sub Organization 
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email:
                  type: string
                  example: testuser@lambdatest.com
            example:
              email: testuser@lambdatest.com
            
      responses:
        '200':
          description: Move user to Sub Organization Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  
                  type:
                    type: string
                    example: success
                  message:
                    type: string
                    example: >- 
                      User : testuser@lambdatest.com moved to Sub-Organization ID - 12345
              examples:
                Move user to Sub Organization Success:
                  value:
                    type: success
                    message: >-
                        User : testuser@lambdatest.com moved to Sub-Organization ID - 12345            
        '422':
          description: Wrong email
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Sorry! User not found or invalid
                  title:
                    type: string
                    example: Unauthorized Error
                  type:
                    type: string
                    example: error
              examples:
                Wrong email:
                  value:
                    type: error
                    title: Bad Request Error
                    message: >-
                      Sorry! User not found or invalid
  /api/organization/sub-org/{sub_org_id}/users:
    post:
      security:
        - basicAuth: [ ]
      tags:
        - Sub Organization
          - User
      summary: Register user to Sub Organization 
      description: Register user to Sub Organization 
      operationId: registerUserToSubOrg
      parameters:
      - name: sub_org_id
        in: path
        description: Sub Organization ID
        required: true
        style: simple
        explode: false
        schema:
          type: integer
      requestBody:
        description: Register user to Sub Organization 
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  example: testUser
                email:
                  type: string
                  example: testuser@lambdatest.com
                password:
                  type: string
                  example: helloTest@123
                org_role:
                  type: string
                  example: User
            example:
              name: testUser
              email: testuser@lambdatest.com
              password: helloTest@123
              org_role: User
      responses:
        '200':
          description: Register user to Sub Organization Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  
                  type:
                    type: string
                    example: success
                  message:
                    type: string
                    example: >- 
                      User for email: testuser@lambdatest.com created"
              examples:
                Register user to Sub Organization Success:
                  value:
                    type: success
                    message: >-
                      User for email: testuser@lambdatest.com created
                    
        '400':
          description: Wrong org_role
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: >-
                      Sorry, Requested Role is not valid
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Wrong org_role:
                  value:
                    type: error
                    title: Bad Request Error
                    message: >-
                      Sorry, Requested Role is not valid
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```

---


## 7. Test Manager

**File:** `test-manager.yaml` | **Size:** 158076 bytes | **Lines:** 4475

```yaml
openapi: 3.0.0
info:
  title: TestMu AI Test Manager API Documentation
  version: 1.0.0
servers:
  - url: https://test-manager-api.lambdatest.com/
  - url: https://eu-test-manager-api.lambdatest.com/
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
tags:
  - name: Projects
  - name: Folder
  - name: Environment
  - name: Test Cases
  - name: Execution History
  - name: Test Steps
  - name: Test Runs
  - name: Milestone
  - name: Jira Flow
paths:
  /api/v1/projects:
    post:
      tags:
        - Projects
      summary: Create Project
      description: 'Create a New Project'
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
                  description: Name of the project
                description:
                  type: string
                  description: Description of the project
                tags:
                  type: array
                  items:
                    type: string
                  description: Tags associated with the project
              example:
                name: TestProject-Demo
                description: Project for testing project creation
                tags:
                  - tag1
                  - tag2
                  - tag3
                source: KTM
      security:
        - basicAuth: []
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Tue, 20 Aug 2024 06:16:51 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8b6041c3eecbf377-BOM
            Content-Encoding:
              schema:
                type: string
                example: br
          content:
            application/json:
              schema:
                type: object
              example:
                message: Project created successfully
                type: Success
                id: 01J5Q6WPACPV0HJNVKMG0S141Z
    put:
      tags:
        - Projects
      summary: Update Project By ID
      description: 'Update Project Details By ID'
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                project_id: 'project_id'
                name: Test Project -LambdaTest Demo
                description: Updated Test Project Demo Description
                tags:
                  - tag1
                  - tag2
      security:
        - basicAuth: []
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Tue, 20 Aug 2024 06:28:05 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8b6052380de5471f-BOM
            Content-Encoding:
              schema:
                type: string
                example: br
          content:
            application/json:
              schema:
                type: object
              example:
                message: Project updated successfully
                type: Success
        '422':
          description: Unprocessable Entity
          headers:
            Date:
              schema:
                type: string
                example: Tue, 20 Aug 2024 06:29:54 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Content-Length:
              schema:
                type: integer
                example: '79'
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8b6054e04a8c471f-BOM
          content:
            application/json:
              schema:
                type: object
              example:
                type: error
                title: Request Not Processed
                message: Invalid project ID
    get:
      tags:
        - Projects
      summary: Get All Projects
      description: Get All Projects
      security:
        - basicAuth: []
      parameters:
        - name: page
          in: query
          schema:
            type: integer
          example: '20'
        - name: per_page
          in: query
          schema:
            type: integer
          example: '10'
        - name: sort
          in: query
          schema:
            type: string
          example: created_at
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 08:13:47 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a92eeaaccd9a931-MAA
            Content-Encoding:
              schema:
                type: string
                example: br
          content:
            application/json:
              schema:
                type: object
              example:
                data:
                  - project_id: 01J3PWJPQPGHBNPHBXX4DSME1H
                    name: Test Project
                    description: This for testing purpose
                    test_case_count: 0
                    created_by: 2048070
                    updated_by: 2048070
                    created_at: '2024-07-26T06:45:15Z'
                    updated_at: '2024-07-26T06:45:15Z'
                    tags:
                      - tag_id: 5979
                        name: Tag-1
                      - tag_id: 5980
                        name: Tag-2
                columnMetadata:
                  created_at:
                    display_name: Created At
                    default: true
                    can_be_hidden: true
                    sortable: true
                  created_by:
                    display_name: Created By
                    default: true
                    can_be_hidden: false
                    sortable: false
                  deleted_at:
                    display_name: Deleted At
                    default: true
                    can_be_hidden: false
                    sortable: true
                  description:
                    display_name: Description
                    default: true
                    can_be_hidden: false
                    sortable: true
                  name:
                    display_name: Name
                    default: true
                    can_be_hidden: false
                    sortable: true
                  organization_id:
                    display_name: Organization ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  updated_at:
                    display_name: Updated At
                    default: false
                    can_be_hidden: true
                    sortable: false
                  updated_by:
                    display_name: Updated By
                    default: true
                    can_be_hidden: false
                    sortable: false
                filterMetadata:
                  created_at:
                    display_name: Created At
                    scopes:
                      - created_at_condition_before
                      - created_at_condition_after
                      - created_at_condition_on
                      - created_at_condition_between
                    type: time.Time
                  created_by:
                    display_name: Created By
                    type: int
                  name:
                    display_name: Name
                    type: string
                  organization_id:
                    display_name: Organization ID
                    type: int
                  updated_by:
                    display_name: Updated By
                    type: int
                pagination:
                  current_page: 1
                  last_page: 1
                  per_page: 10
                  total: 1
  /api/v1/projects/{project_id}:
    get:
      tags:
        - Projects
      summary: Get Project By ID
      description: Get Project Details By ID
      security:
        - basicAuth: []
      parameters:
        - name: project_id
          in: path
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 08:19:46 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a92f772cf43a931-MAA
            Content-Encoding:
              schema:
                type: string
                example: br
          content:
            application/json:
              schema:
                type: object
              example:
                data:
                  project_id: 01J3PWJPQPGHBNPHBXX4DSME1H
                  name: Test Project
                  description: This for testing purpose
                  test_case_count: 0
                  created_by: 2048070
                  updated_by: 2048070
                  created_at: '2024-07-26T06:45:15Z'
                  updated_at: '2024-07-26T06:45:15Z'
                  tags:
                    - tag_id: 5979
                      name: Tag-1
                    - tag_id: 5980
                      name: Tag-2
        '422':
          description: Unprocessable Entity
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 08:20:33 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Content-Length:
              schema:
                type: integer
                example: '79'
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a92f89a9fcfa931-MAA
          content:
            application/json:
              schema:
                type: object
              example:
                type: error
                title: Request Not Processed
                message: Invalid project ID
  /api/v1/folder:
    post:
      tags:
        - Folder
      summary: Create Folder
      description: Create New Folder
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                folders:
                  - name: Test Folder - Demo
                    description: Test Folder for creating Folder Demo
                    parent_folder_id: 'parent_folder_id'
                    entity_id: 'project_id'
                    entity_type: project
      security:
        - basicAuth: []
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Tue, 20 Aug 2024 06:35:41 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8b605d5c8a7c471f-BOM
            Content-Encoding:
              schema:
                type: string
                example: br
          content:
            application/json:
              schema:
                type: object
              example:
                message: Folders created successfully
                type: Success
                id: 01J5Q7Z65YF1TE22255HBRVSW7
    put:
      tags:
        - Folder
      summary: Update Folder By ID
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                id: 'folder_id'
                name: Test Folder - LambdaTest Demo
                description: Test Folder Description Update
                parent_folder_id: 'parent_folder_id'
      security:
        - basicAuth: []
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Tue, 20 Aug 2024 06:41:13 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8b6065735a95471f-BOM
            Content-Encoding:
              schema:
                type: string
                example: br
          content:
            application/json:
              schema:
                type: object
              example:
                message: Folder updated successfully
                type: Success
        '422':
          description: Unprocessable Entity
          headers:
            Date:
              schema:
                type: string
                example: Tue, 20 Aug 2024 07:21:02 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Content-Length:
              schema:
                type: integer
                example: '78'
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8b609fca48493b61-BOM
          content:
            application/json:
              schema:
                type: object
              example:
                type: error
                title: Request Not Processed
                message: Invalid folder ID
  /api/v1/folder/entity/{entity_id}:
    get:
      tags:
        - Folder
      summary: Get All folder details By Project ID
      description: Get All folder details By Project ID
      security:
        - basicAuth: []
      parameters:
        - name: entity_id
          description : entity_id is the project_id
          in: path
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 10:06:36 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a9393f08a957fad-MAA
            Content-Encoding:
              schema:
                type: string
                example: br
          content:
            application/json:
              schema:
                type: object
              examples:
                example-0:
                  summary: Success - 200
                  value:
                    data:
                      - name: Test Folder
                        description: Folder for testing purpose
                        id: 01J3Q0DBFF2M74H527NZZAPR9B
                        parent_id: null
                        entity_id: 01J3PWJPQPGHBNPHBXX4DSME1H
                        entity_type: project
                        created_by: 2048070
                        updated_by: 2048070
                        created_at: '2024-07-26T07:52:14Z'
                        updated_at: '2024-07-26T07:52:14Z'
                example-1:
                  summary: Invalid Entity ID - 200
                  value:
                    data: []
  /api/v1/projects/{project_id}/folder/{folder_id}/test-cases:
    get:
      tags:
        - Folder
      summary: Get Test Cases By Folder ID
      description: Get Test Case Details by Folder ID
      security:
        - basicAuth: []
      parameters:
        - name: page
          in: query
          schema:
            type: integer
          example: '20'
        - name: per_page
          in: query
          schema:
            type: integer
          example: '10'
        - name: sort
          in: query
          schema:
            type: string
          example: '-created_at'
        - name: project_id
          in: path
          schema:
            type: string
          required: true
        - name: folder_id
          in: path
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Thu, 01 Aug 2024 07:47:41 GMT
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
          content:
            application/json:
              schema:
                type: object
              example:
                data:
                  - project_id: 01J43X04Q3WG0A0BVXNPT20QM9
                    folder_id: 01J43X53GXR2T0BX63MS69HXCJ
                    test_case_id: 01J43XFH00CXZ3HZ7AMBB32H7Q
                    title: Test Case - 1
                    description: Demo Test Case - 1
                    priority: Medium
                    type: Regression
                    preconditions: preconditions
                    estimated_time: 20
                    created_by: 1000137129
                    updated_by: 1000137129
                    created_at: '2024-07-31T08:11:07Z'
                    updated_at: '2024-08-01T13:17:34Z'
                    status: Draft
                    tags:
                      - tag_id: 5865
                        name: tag2
                      - tag_id: 5866
                        name: tag3
                      - tag_id: 5867
                        name: tag090909090909
                    internal_id: TC-2
                    automation_status: Not Automated
                    is_auteur_generated: false
                  - project_id: 01J43X04Q3WG0A0BVXNPT20QM9
                    folder_id: 01J43X53GXR2T0BX63MS69HXCJ
                    test_case_id: 01J43XFGZC1ZQ53HC54B3RDAPW
                    title: Test case-2
                    description: Demo Test case -2
                    priority: Medium
                    type: Regression
                    preconditions: preconditions
                    estimated_time: 20
                    created_by: 1000137129
                    updated_by: 1000137129
                    created_at: '2024-07-31T08:11:07Z'
                    updated_at: '2024-08-01T13:16:27Z'
                    status: Draft
                    tags:
                      - tag_id: 5865
                        name: tag2
                      - tag_id: 5866
                        name: tag3
                      - tag_id: 5867
                        name: tag090909090909
                    internal_id: TC-1
                    automation_status: Not Automated
                    is_auteur_generated: false
                columnMetadata:
                  auteur_test_id:
                    display_name: Auteur Test ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  automation_status:
                    display_name: Automation Status
                    default: false
                    can_be_hidden: true
                    sortable: false
                  created_at:
                    display_name: Created At
                    default: true
                    can_be_hidden: true
                    sortable: true
                  created_by:
                    display_name: Created By
                    default: true
                    can_be_hidden: true
                    sortable: false
                  deleted_at:
                    display_name: Deleted By
                    default: false
                    can_be_hidden: true
                    sortable: false
                  description:
                    display_name: Description
                    default: true
                    can_be_hidden: true
                    sortable: false
                  estimated_time:
                    display_name: Estimated Time
                    default: false
                    can_be_hidden: true
                    sortable: false
                  external_id:
                    display_name: external_id
                    default: false
                    can_be_hidden: true
                    sortable: false
                  folder_id:
                    display_name: Folder ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  internal_id:
                    display_name: internal_id
                    default: false
                    can_be_hidden: true
                    sortable: false
                  is_auteur_generated:
                    display_name: Auteur Generated
                    default: false
                    can_be_hidden: true
                    sortable: false
                  organization_id:
                    display_name: Organization ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  preconditions:
                    display_name: Preconditions
                    default: false
                    can_be_hidden: true
                    sortable: false
                  priority:
                    display_name: Priority
                    default: true
                    can_be_hidden: false
                    sortable: false
                  project_id:
                    display_name: Project ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  status:
                    display_name: Status
                    default: true
                    can_be_hidden: false
                    sortable: false
                  title:
                    display_name: Title
                    default: true
                    can_be_hidden: false
                    sortable: false
                  type:
                    display_name: Type
                    default: true
                    can_be_hidden: false
                    sortable: false
                  updated_at:
                    display_name: Updated At
                    default: false
                    can_be_hidden: true
                    sortable: false
                  updated_by:
                    display_name: Updated By
                    default: false
                    can_be_hidden: true
                    sortable: false
                filterMetadata:
                  automation_status:
                    display_name: Automation Status
                    options:
                      - Automated
                      - Not Automated
                      - To Be Automated
                    type: select
                  created_at:
                    display_name: Created At
                    scopes:
                      - created_at_condition_before
                      - created_at_condition_after
                      - created_at_condition_on
                      - created_at_condition_between
                    type: time.Time
                  created_by:
                    display_name: Created By
                    type: int
                  organization_id:
                    display_name: Organization ID
                    type: int
                  priority:
                    display_name: Priority
                    options:
                      - Lowest
                      - Low
                      - Medium
                      - High
                      - Highest
                    type: select
                  status:
                    display_name: Status
                    options:
                      - Draft
                      - Open
                      - Closed
                    type: select
                  title:
                    display_name: Title
                    type: string
                  type:
                    display_name: Type
                    options:
                      - Accessibility
                      - Acceptance
                      - Compatibility
                      - Destructive
                      - Performance
                      - Integration
                      - Functional
                      - Regression
                      - Smoke & Sanity
                      - Security
                      - User Interface
                      - Usability
                      - Other
                    type: select
                pagination:
                  current_page: 1
                  last_page: 1
                  per_page: 20
                  total: 2
        '422':
          description: Unprocessable Entity
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 09:16:13 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Content-Length:
              schema:
                type: integer
                example: '78'
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a934a1e3e287e87-MAA
          content:
            application/json:
              schema:
                type: object
              examples:
                example-0:
                  summary: Invalid Folder ID - 422
                  value:
                    type: error
                    title: Request Not Processed
                    message: Invalid Folder ID
                example-1:
                  summary: Invalid Project ID - 422
                  value:
                    type: error
                    title: Request Not Processed
                    message: Invalid project ID
  /api/v1/environments:
    get:
      tags:
        - Environment
      summary: Get All Environments
      security:
        - basicAuth: []
      parameters:
        - name: page
          in: query
          schema:
            type: integer
          example: '20'
        - name: per_page
          in: query
          schema:
            type: integer
          example: '10'
        - name: sort
          in: query
          schema:
            type: string
          example: created_at
      responses:
        '200':
          description: OK
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
            Content-Length:
              schema:
                type: integer
                example: '420'
          content:
            application/json:
              schema:
                type: object
              example:
                data:
                  organization_id: 166750
                  environments:
                    - environment_id: 4
                      platform: Mobile
                      name: Mobile iOS
                      os: iOS
                      os_version: '16'
                      browser: Firefox
                      browser_version: '121'
                      brand: Apple
                      device: iPhone 15
                    - environment_id: 1
                      platform: Desktop
                      name: Mobile iOS
                      os: MacOS
                      os_version: Sonoma
                      browser: Safari
                      browser_version: '17'
                      resolution: 1920x1080
                    - environment_id: 3
                      platform: Mobile
                      name: Mobile iOS
                      os: Android
                      os_version: '14'
                      browser: Chrome
                      browser_version: '104'
                      brand: Samsung
                      device: Galaxy S22
                    - environment_id: 2
                      platform: Desktop
                      name: Mobile iOS
                      os: Windows
                      os_version: '11'
                      browser: Chrome
                      browser_version: '104'
                      resolution: 1920x1080
                    - environment_id: 5
                      platform: Desktop
                      name: Mobile iOS
                      os: Windows 11
                      browser: Chrome
                      resolution: 1024*766
                    - environment_id: 6
                      platform: Mobile
                      name: Mobile iOS
                      os: Android
                      browser: Chrome
                      brand: Samsung
                      device: Flip 3
                      resolution: 1024*766
                    - environment_id: 7
                      platform: Mobile
                      name: Mobile iOS
                      os: ios
                      browser: Opera
                      brand: Apple
                      device: iPhone 13 Pro
                      resolution: 1024*766
    post:
      tags:
        - Environment
      summary: Create Environments
      description: Create configuration with environment name and variables. Note that supported variable values (Browser, OS, Device) are not publicly available currently, reach out to support if needed.
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - configurations
              properties:
                configurations:
                  type: array
                  items:
                    type: object
                    required:
                      - name
                      - environments
                    properties:
                      id:
                        type: integer
                        description: Configuration ID (optional)
                      name:
                        type: string
                        description: Configuration name (required)
                      platform:
                        type: string
                        description: Platform type (optional)
                      is_custom:
                        type: boolean
                        description: Whether this is a custom configuration (optional)
                      custom_app:
                        type: boolean
                        description: Whether this uses a custom app (optional)
                      app_auto_update:
                        type: boolean
                        description: Whether app auto-update is enabled (optional)
                      app_package:
                        type: string
                        description: App package name (optional)
                      environments:
                        type: array
                        items:
                          type: object
                          properties:
                            os_name:
                              type: string
                              description: Operating system name (optional)
                            os:
                              type: string
                              description: Operating system (optional)
                            os_version:
                              type: string
                              description: Operating system version (optional)
                            browser:
                              type: string
                              description: Browser name (optional)
                            browser_version:
                              type: string
                              description: Browser version (optional)
                            brand:
                              type: string
                              description: Device brand (optional)
                            device:
                              type: string
                              description: Device name (optional)
                            resolution:
                              type: string
                              description: Screen resolution (optional)
                            os_version_id:
                              type: string
                              description: OS version ID (optional)
                            os_id:
                              type: string
                              description: OS ID (optional)
                            browser_id:
                              type: string
                              description: Browser ID (optional)
                            browser_version_id:
                              type: string
                              description: Browser version ID (optional)
                            resolution_id:
                              type: string
                              description: Resolution ID (optional)
                            device_id:
                              type: string
                              description: Device ID (optional)
                            manufacturer_id:
                              type: string
                              description: Manufacturer ID (optional)
                            app_id:
                              type: string
                              description: App ID (optional)
                            url:
                              type: string
                              description: URL (optional)
                            private_cloud:
                              type: boolean
                              description: Whether private cloud is used (optional)
                            udid:
                              type: string
                              description: UDID (optional)
                            platform_type:
                              type: string
                              description: Platform type (optional)
            example:
              configurations:
                - name: Web Desktop Chrome
                  platform: web
                  is_custom: false
                  environments:
                    - os: Windows
                      os_version: '11'
                      browser: Chrome
                      browser_version: '120'
                      resolution: 1920x1080
                      platform_type: desktop
                - name: Mobile iOS Safari
                  platform: real-device-mobile
                  is_custom: false
                  environments:
                    - os: ios
                      os_version: '17.0'
                      browser: Safari
                      device: iPhone 15 Pro
                      brand: Apple
                      platform_type: mobile
                - name: Custom Android App
                  platform: real-device-mobile
                  is_custom: true
                  custom_app: true
                  app_auto_update: false
                  app_package: com.example.app
                  environments:
                    - os: android
                      os_version: '13'
                      device: Samsung Galaxy S23
                      brand: Samsung
                      platform_type: mobile
      responses:
        '200':
          description: Environments created successfully
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                  type:
                    type: string
                  environment_id:
                    type: array
                    items:
                      type: integer
              example:
                message: Environments created successfully
                type: success
                environment_id:
                  - 123
                  - 124
                  - 125
        '400':
          description: Bad request - Invalid JSON, missing required fields, or query parameters present
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  title:
                    type: string
                  status:
                    type: integer
                  message:
                    oneOf:
                      - type: string
                      - type: array
                        items:
                          type: object
                          properties:
                            key:
                              type: string
                            detail:
                              type: string
              examples:
                invalid_json:
                  summary: Invalid JSON syntax
                  value:
                    title: Bad Request Error
                    message:
                        detail: Body Payload format is not correct
                missing_field:
                  summary: Missing required field
                  value:
                    title: Bad Request Error
                    message:
                      detail: Required params are missing
                query_params:
                  summary: Query parameters present (not allowed)
                  value:
                    title: Bad Request Error
                    message:
                      detail: Bad query params
                invalid_field_type:
                  summary: Invalid field value type
                  value:
                    title: Bad Request Error
                    message:
                      detail: 'Please give correct input value for the "name" field'
        '401':
          description: Unauthorized - Invalid or missing authentication token
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  title:
                    type: string
                  status:
                    type: integer
                  message:
                    type: string
              example:
                title: Unauthorized Error
                message: Unauthenticated
        '403':
          description: Forbidden - User does not have access to TMS or action is not allowed
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  title:
                    type: string
                  status:
                    type: integer
                  message:
                    type: string
              examples:
                tms_access_revoked:
                  summary: TMS access revoked
                  value:
                    title: Unauthorized Error
                    message: Access to the product has been removed. Please contact your admin.
                user_not_authorized:
                  summary: User not authorized
                  value:
                    title: Unauthorized Error
                    message: You are not allowed to perform this action.
        '422':
          description: Unprocessable Entity - Validation errors or business logic violations
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  title:
                    type: string
                  status:
                    type: integer
                  message:
                    oneOf:
                      - type: string
                      - type: array
                        items:
                          type: object
                          properties:
                            key:
                              type: string
                            detail:
                              type: string
              examples:
                name_exists:
                  summary: Environment name already exists
                  value:
                    title: Request Not Processed
                    message: Configuration with this name already exists
                validation_errors:
                  summary: Validation errors in request body
                  value:
                    title: Request Not Processed
                    message:
                      - key: name
                        detail: name is required
                      - key: environments
                        detail: environments is required
        '500':
          description: Internal Server Error - Server-side error occurred
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  title:
                    type: string
                  status:
                    type: integer
                  message:
                    type: string
              examples:
                database_error:
                  summary: Database error
                  value:
                    title: Internal Server Error
                    message: Sorry! Something went wrong
                decode_error:
                  summary: Failed to decode request
                  value:
                    title: Internal Server Error
                    message: Sorry! Something went wrong
    put:
      tags:
        - Environment
      summary: Update Environment
      description: Update existing configuration for a specific configuration ID. Note the configuration ID is dynamic and must be fetched from the 'get environments' API before each update.
      security:
        - basicAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - id
                - name
                - environments
              properties:
                id:
                  type: integer
                  description: Configuration ID (required for update)
                name:
                  type: string
                  description: Configuration name (required)
                platform:
                  type: string
                  description: Platform type (optional)
                environments:
                  type: array
                  items:
                    type: object
                    properties:
                      os:
                        type: string
                        description: Operating system (optional)
                      os_name:
                        type: string
                        description: Operating system name (optional)
                      os_id:
                        type: string
                        description: OS ID (optional)
                      os_version:
                        type: string
                        description: Operating system version (optional)
                      os_version_id:
                        type: string
                        description: OS version ID (optional)
                      browser:
                        type: string
                        description: Browser name (optional)
                      browser_id:
                        type: string
                        description: Browser ID (optional)
                      browser_version:
                        type: string
                        description: Browser version (optional)
                      browser_version_id:
                        type: string
                        description: Browser version ID (optional)
                      resolution:
                        type: string
                        description: Screen resolution (optional)
                      resolution_id:
                        type: string
                        description: Resolution ID (optional)
                      url:
                        type: string
                        description: URL (optional)
                      platform_type:
                        type: string
                        description: Platform type (optional)
                      brand:
                        type: string
                        description: Device brand (optional)
                      device:
                        type: string
                        description: Device name (optional)
                      device_id:
                        type: string
                        description: Device ID (optional)
                      manufacturer_id:
                        type: string
                        description: Manufacturer ID (optional)
                      app_id:
                        type: string
                        description: App ID (optional)
                      private_cloud:
                        type: boolean
                        description: Whether private cloud is used (optional)
                      udid:
                        type: string
                        description: UDID (optional)
            example:
              id: 44643
              name: DesktopConfig
              platform: desktop
              environments:
                - os: macOS
                  os_name: macOS
                  os_id: macOS
                  os_version: macOS Tahoe
                  os_version_id: OSV100021498719908712
                  browser: Chrome
                  browser_id: BRS100021498722190810
                  browser_version: '143'
                  browser_version_id: BRV19216818160455129266
                  resolution: 3840x2160
                  resolution_id: RES100021498719938809
                  url: ''
                  platform_type: web
      responses:
        '200':
          description: Environment updated successfully
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  message:
                    type: string
              example:
                type: success
                message: Environment updated successfully
        '400':
          description: Bad request - Invalid JSON, missing required fields, or query parameters present
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  title:
                    type: string
                  status:
                    type: integer
                  message:
                    oneOf:
                      - type: string
                      - type: array
                        items:
                          type: object
                          properties:
                            key:
                              type: string
                            detail:
                              type: string
              examples:

                invalid_field_type:
                  summary: Invalid field type
                  value:
                    title: Bad Request Error
                    message:
                      'Please, give correct input value for the ''<field>'' field'
                missing_field:
                  summary: Missing required fields
                  value:
                    title: Bad Request Error
                    message:
                      Required params are missing
                auth_check_failed:
                  summary: User authentication check failed
                  value:
                    title: Bad Request Error
                    message: Failed to cast userRes to UserAuthRes type
        '403':
          description: Forbidden - User does not have access to TMS or action is not allowed
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  title:
                    type: string
                  status:
                    type: integer
                  message:
                    type: string
              example:
                title: Unauthorized Error
                message: You are not allowed to perform this action.
        '404':
          description: Not Found - Resource not found
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  title:
                    type: string
                  status:
                    type: integer
                  message:
                    type: string
              example:
                title: Resource not found
                message: Record not found
        '422':
          description: Unprocessable Entity - Business logic errors
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  title:
                    type: string
                  status:
                    type: integer
                  message:
                    oneOf:
                      - type: string
                      - type: array
                        items:
                          type: string
              examples:
                invalid_environment_id:
                  summary: Environment not found (during organization verification)
                  value:
                    title: Request Not Processed
                    message: Invalid Environment ID
                duplicate_name:
                  summary: Duplicate environment name
                  value:
                    title: Request Not Processed
                    message: Configuration with this name already exists
        '500':
          description: Internal Server Error
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 06 Dec 2023 11:28:44 GMT
          content:
            application/json:
              schema:
                type: object
                properties:
                  type:
                    type: string
                  title:
                    type: string
                  status:
                    type: integer
                  message:
                    type: string
                  requestId:
                    type: string
                  success:
                    type: boolean
                  code:
                    type: integer
                  data:
                    type: string
              examples:
                generic_error:
                  value:
                    title: Internal Server Error
                    message: Sorry! Something went wrong
  /api/v1/test-cases:
    post:
      tags:
        - Test Cases
      summary: Create Test Cases By Project ID
      description: Create New Test Cases
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                project_id: 'project_id'
                folder_id: 'folder_id'
                test_cases:
                  - title: Demo Test case - 1
                    description: Description Demo Test case - 1
                    preconditions: preconditions
                    tags:
                      - tag1
                      - tag3
                      - tagtest1
                  - title: Demo Test case - 2
                    description: Description Demo Test case - 2
                    preconditions: preconditions
                    tags:
                      - tag1
                      - tag3
                      - tagtest1
      security:
        - basicAuth: []
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Tue, 20 Aug 2024 07:34:00 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8b60b2c65fc3f45a-BOM
            Content-Encoding:
              schema:
                type: string
                example: br
          content:
            application/json:
              schema:
                type: object
              example:
                message: Test cases created successfully
                type: Success
                id:
                  - 01J5QB9YQTGBCQJXRFA94C29MB
                  - 01J5QB9YR9T8XECZX8PXZVFTNE
        '422':
          description: Unprocessable Entity
          headers:
            Date:
              schema:
                type: string
                example: Tue, 20 Aug 2024 07:34:55 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Content-Length:
              schema:
                type: integer
                example: '79'
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8b60b422b8ecf45a-BOM
          content:
            application/json:
              schema:
                type: object
              example:
                type: error
                title: Request Not Processed
                message: Invalid project ID
  /api/v1/projects/{project_id}/test-cases:
    get:
      tags:
        - Test Cases
      summary: Get Test Cases By Project ID
      description: get All Test Cases By Project ID
      security:
        - basicAuth: []
      parameters:
        - name: page
          in: query
          schema:
            type: integer
          example: '20'
        - name: per_page
          in: query
          schema:
            type: integer
          example: '40'
        - name: sort
          in: query
          schema:
            type: string
          example: created_at
        - name: project_id
          in: path
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 08:38:03 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a9312372e8d7f96-MAA
            Content-Encoding:
              schema:
                type: string
                example: br
          content:
            application/json:
              schema:
                type: object
              example:
                data:
                  - project_id: 01J3PWJPQPGHBNPHBXX4DSME1H
                    folder_id: 01J3Q0DBFF2M74H527NZZAPR9B
                    test_case_id: 01J3Q2ZTG995PXPMQFQE2WYVDV
                    title: search w3school.com in google search tab
                    description: ''
                    priority: Medium
                    type: NA
                    estimated_time: 10
                    created_by: 2048070
                    updated_by: 2048070
                    created_at: '2024-07-26T08:37:16Z'
                    updated_at: '2024-07-26T08:37:16Z'
                    status: Draft
                    test_steps: null
                    internal_id: TC-2
                    external_id: null
                    automation_status: Not Automated
                    bdd_scenarios: null
                    is_auteur_generated: false
                  - project_id: 01J3PWJPQPGHBNPHBXX4DSME1H
                    folder_id: 01J3Q0DBFF2M74H527NZZAPR9B
                    test_case_id: 01J3Q2ZTG8DF3B4CK66ZGZ17WY
                    title: go to google.com
                    description: ''
                    priority: Medium
                    type: NA
                    estimated_time: 10
                    created_by: 2048070
                    updated_by: 2048070
                    created_at: '2024-07-26T08:37:16Z'
                    updated_at: '2024-07-26T08:37:16Z'
                    status: Draft
                    test_steps: null
                    internal_id: TC-1
                    external_id: null
                    automation_status: Not Automated
                    bdd_scenarios: null
                    is_auteur_generated: false
                columnMetadata:
                  auteur_test_id:
                    display_name: Auteur Test ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  automation_status:
                    display_name: Automation Status
                    default: false
                    can_be_hidden: true
                    sortable: false
                  created_at:
                    display_name: Created At
                    default: true
                    can_be_hidden: true
                    sortable: true
                  created_by:
                    display_name: Created By
                    default: true
                    can_be_hidden: true
                    sortable: false
                  deleted_at:
                    display_name: Deleted By
                    default: false
                    can_be_hidden: true
                    sortable: false
                  description:
                    display_name: Description
                    default: true
                    can_be_hidden: true
                    sortable: false
                  estimated_time:
                    display_name: Estimated Time
                    default: false
                    can_be_hidden: true
                    sortable: false
                  external_id:
                    display_name: external_id
                    default: false
                    can_be_hidden: true
                    sortable: false
                  folder_id:
                    display_name: Folder ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  internal_id:
                    display_name: internal_id
                    default: false
                    can_be_hidden: true
                    sortable: false
                  is_auteur_generated:
                    display_name: Auteur Generated
                    default: false
                    can_be_hidden: true
                    sortable: false
                  organization_id:
                    display_name: Organization ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  preconditions:
                    display_name: Preconditions
                    default: false
                    can_be_hidden: true
                    sortable: false
                  priority:
                    display_name: Priority
                    default: true
                    can_be_hidden: false
                    sortable: false
                  project_id:
                    display_name: Project ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  status:
                    display_name: Status
                    default: true
                    can_be_hidden: false
                    sortable: false
                  title:
                    display_name: Title
                    default: true
                    can_be_hidden: false
                    sortable: false
                  type:
                    display_name: Type
                    default: true
                    can_be_hidden: false
                    sortable: false
                  updated_at:
                    display_name: Updated At
                    default: false
                    can_be_hidden: true
                    sortable: false
                  updated_by:
                    display_name: Updated By
                    default: false
                    can_be_hidden: true
                    sortable: false
                filterMetadata:
                  automation_status:
                    display_name: Automation Status
                    options:
                      - Automated
                      - Not Automated
                      - To Be Automated
                    type: select
                  created_at:
                    display_name: Created At
                    scopes:
                      - created_at_condition_before
                      - created_at_condition_after
                      - created_at_condition_on
                      - created_at_condition_between
                    type: time.Time
                  created_by:
                    display_name: Created By
                    type: int
                  organization_id:
                    display_name: Organization ID
                    type: int
                  priority:
                    display_name: Priority
                    options:
                      - Lowest
                      - Low
                      - Medium
                      - High
                      - Highest
                    type: select
                  status:
                    display_name: Status
                    options:
                      - Draft
                      - Open
                      - Closed
                    type: select
                  title:
                    display_name: Title
                    type: string
                  type:
                    display_name: Type
                    options:
                      - Accessibility
                      - Acceptance
                      - Compatibility
                      - Destructive
                      - Performance
                      - Integration
                      - Functional
                      - Regression
                      - Smoke & Sanity
                      - Security
                      - User Interface
                      - Usability
                      - Other
                    type: select
                pagination:
                  current_page: 1
                  last_page: 1
                  per_page: 40
                  total: 2
        '422':
          description: Unprocessable Entity
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 08:41:18 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Content-Length:
              schema:
                type: integer
                example: '79'
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a9316fdbf3e7f96-MAA
          content:
            application/json:
              schema:
                type: object
              example:
                type: error
                title: Request Not Processed
                message: Invalid project ID
  /api/v1/test-cases/{test_case_id}:
    delete:
      tags:
        - Test Cases
      summary: Delete Test Case By ID
      description: Delete a test case by its ID
      security:
        - basicAuth: []
      parameters:
        - name: test_case_id
          in: path
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 08:43:14 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Content-Length:
              schema:
                type: integer
                example: '68'
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a931ab75d437f96-MAA
          content:
            application/json:
              schema:
                type: object
              example:
                message: Test cases deleted successfully
                type: Success
        '422':
          description: Unprocessable Entity
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 08:43:50 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Content-Length:
              schema:
                type: integer
                example: '87'
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a931ab75d437f96-MAA
          content:
            application/json:
              schema:
                type: object
              example:
                type: error
                title: Request Not Processed
                message: Invalid test case provided
  /api/v1/milestone:
    post:
      tags:
        - Milestone
      summary: Create a new milestone
      description: Endpoint to create a new milestone for a project.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                project_id:
                  type: string
                  description: Unique identifier for the project.
                title:
                  type: string
                  description: Title of the milestone.
                description:
                  type: string
                  description: Detailed description of the milestone.
                test_run_id:
                  type: array
                  items:
                    type: string
                  description: List of associated test run IDs.
                tags:
                  type: array
                  items:
                    type: string
                  description: Tags associated with the milestone.
                start_at:
                  type: string
                  format: date-time
                  description: Start date and time of the milestone in the format YYYY-MM-DD HH:mm:ss.
                end_at:
                  type: string
                  format: date-time
                  description: End date and time of the milestone in the format YYYY-MM-DD HH:mm:ss.
                owned_by:
                  type: integer
                  description: User ID of the milestone owner.
                milestone_id:
                  type: string
                  description: Unique identifier for the milestone.
              required:
                - project_id
                - title
                - start_at
                - end_at
                - owned_by
              example:
                project_id: 01JEQSN8WQW76RM59X3KSBZYVH
                title: mile mi
                description: desc desc.
                test_run_id:
                  - 01JF4TH6P7A9TCP2YPZWQX7E3Z
                tags:
                  - t01
                  - t02
                start_at: 2024-01-02 15:04:05
                end_at: 2026-01-02 15:04:05
                owned_by: 862914
      security:
        - basicAuth: []
      responses:
        200:
          description: Successful creation of the milestone.
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Milestone created successfully
                  type:
                    type: string
                    example: Success
                  id:
                    type: string
                    example: 01JHN7P7PXFF4F85SPXDKTGXWG
  /api/v1/project/{project_id}/milestones:
    get:
      tags:
        - Milestone
      summary: Get All Milestones By Project ID
      description: Retrieve all milestones associated with a given project ID.
      parameters:
        - name: project_id
          in: path
          required: true
          schema:
            type: string
      security:
        - basicAuth: []
      responses:
        200:
          description: Successful retrieval of milestones.
          content:
            application/json:
              schema:
                type: object
                example:
                  data:
                    project_id: 01JG9PVWC7MJ9YKR92TMDTVYJC
                    name: Sample Test Runs
                    description: ""
                    test_case_count: 17
                    test_run_count: 0
                    created_by: 1000188123
                    updated_by: 1000188123
                    created_at: 2024-12-29T17:19:20Z
                    updated_at: 2024-12-29T17:19:20Z
                    tags:
                      - tag_id: 9043
                        name: sample
  /api/v1/milestone/{milestone_id}:
    delete:
      tags:
        - Milestone
      summary: Delete Milestone
      description: Delete a milestone by its ID.
      parameters:
        - name: milestone_id
          in: path
          required: true
          schema:
            type: string
      security:
        - basicAuth: []
      responses:
        200:
          description: Milestone successfully deleted.
          content:
            application/json:
              schema:
                type: object
                example:
                  message: Milestone deleted successfully
                  type: Success

    get:
      tags:
        - Milestone
      summary: Get Milestone By ID
      description: Get details of a milestone by its ID.
      parameters:
        - name: milestone_id
          in: path
          required: true
          schema:
            type: string
      security:
        - basicAuth: []
      responses:
        200:
          description: Milestone successfully retrieved.
          content:
            application/json:
              schema:
                type: object
                example:
                  data:
                    milestone_id: 01JHN7P7PXFF4F85SPXDKTGXWG
                    project_id: 01JEQSN8WQW76RM59X3KSBZYVH
                    title: mile mi
                    description: desc desc.
                    test_run_id:
                      - 01JF4TH6P7A9TCP2YPZWQX7E3Z
                    tags:
                      - t01
                      - t02
                    start_at: 2024-01-02 15:04:05
                    end_at: 2026-01-02 15:04:05
                    owned_by: 862914
                    created_at: 2024-12-29T17:19:20Z
                    updated_at: 2024-12-29T17:19:20Z
                    created_by: 1000188123
                    updated_by: 1000188123
    put:
      tags:
        - Milestone
      summary: Update Milestone
      description: Update details of an existing milestone.
      parameters:
        - name: milestone_id
          in: path
          required: true
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              example:
                title: Sanity milestone
                description: ""
                test_run_id:
                  - 01JGAXH73Q0D2WRSZPXTWZVRTP
                  - 01JGAZ48DPJS4KGB7R0KF7C0SS
                tags: []
                start_at: 2024-12-31
                end_at: 2025-01-08
                attachments: []
                project_id: 01JG9PVWC7MJ9YKR92TMDTVYJC
      security:
        - basicAuth: []
      responses:
        200:
          description: Milestone successfully updated.
          content:
            application/json:
              schema:
                type: object
                example:
                  message: Milestone updated successfully
                  type: Success

  /api/v2/test-cases/{test_case_id}:
    get:
      tags:
        - Test Cases
      summary: Get Test Case By ID
      description: Get Test Case details by ID
      security:
        - basicAuth: []
      parameters:
        - name: test_case_id
          in: path
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 08:43:14 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Transfer-Encoding:
              schema:
                type: string
                example: chunked
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a9319d24eac7f96-MAA
            Content-Encoding:
              schema:
                type: string
                example: br
          content:
            application/json:
              schema:
                type: object
              example:
                data:
                  project_id: sample_project_id
                  folder_id: sample_folder_id
                  test_case_id: sample_test_case_id
                  title: Sample Test Case Title
                  description: '<p>Sample test case description</p>'
                  priority: Normal
                  type: ''
                  estimated_time: 10
                  preconditions: 'Sample preconditions for the test case'
                  path:
                    - id: sample_root_folder_id
                      name: Root Folder
                    - id: sample_parent_folder_id
                      name: Parent Folder
                    - id: sample_folder_id
                      name: Current Folder
                  created_by: 1234567
                  updated_by: 1234567
                  created_at: '2024-07-26T08:37:16Z'
                  updated_at: '2024-07-26T09:15:00Z'
                  status: ''
                  tags:
                    - tag_id: 100001
                      name: regression
                    - tag_id: 100002
                      name: smoke
                  test_steps:
                    - id: sample_step_id_1
                      serial_no: 1
                      description: 'Open the application'
                      action: null
                      outcome: 'Application opens successfully'
                      attachments: null
                      entity_type: step
                      entity_id: ''
                    - id: sample_step_id_2
                      serial_no: 2
                      description: 'Navigate to the target page'
                      action: null
                      outcome: 'Target page is displayed'
                      attachments: null
                      entity_type: step
                      entity_id: ''
                  internal_id: TC-1
                  external_id: '12345'
                  jira_details:
                    - jira_id: PROJ-123
                      jira_link: 'https://example.atlassian.net/browse/PROJ-123'
                      platform_name: jira
                  dynamic_field_details:
                    - field_id: sample_field_id_1
                      field_name: User
                      type: user
                      placeholder: '1'
                      is_required: false
                      value: ''
                      test_case_id: sample_test_case_id
                      options: null
                    - field_id: sample_field_id_2
                      field_name: Automation Candidate
                      type: single_select
                      placeholder: ''
                      is_required: false
                      value: 'Yes'
                      test_case_id: sample_test_case_id
                      options:
                        - 'Yes'
                        - 'No'
                        - Not applicable
                        - Automated
                  automation_status: Not Automated
                  bdd_scenarios: []
                  is_auteur_generated: false
                  code_generation_status: ''
                  test_type: ''
                  dataset_id: null
                  params_used: false
                  app_id: ''
                  is_mobile: false
                  os: ''
                  live_mode: false
                  commit_id: 100001
                  commit_message: 'Sample commit message'
                  total_steps: 2
                  version: 1
                  snapshot_id: sample_snapshot_id
                  execution_allowed: false
                  execution_code_request_id: 0
                  latest_commit_id: 100001
                  revert_allowed: false
                  session_status: ''
                  session_started_by: 0
                  bulk_automation_status: inactive
                  automation_in_progress: false
                  kaneai_version: 0
                  revert_disabled: false
                  auteur_commit_id: ''
                  is_test_validated: true
                metadata: null
                columnMetadata:
                  auteur_test_id:
                    display_name: Auteur Test ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  automation_status:
                    display_name: Automation Status
                    default: false
                    can_be_hidden: true
                    sortable: false
                  created_at:
                    display_name: Created At
                    default: true
                    can_be_hidden: true
                    sortable: true
                  created_by:
                    display_name: Created By
                    default: true
                    can_be_hidden: true
                    sortable: false
                  dataset_id:
                    display_name: Dataset ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  deleted_at:
                    display_name: Deleted By
                    default: false
                    can_be_hidden: true
                    sortable: false
                  description:
                    display_name: Description
                    default: true
                    can_be_hidden: true
                    sortable: false
                  estimated_time:
                    display_name: Estimated Time
                    default: false
                    can_be_hidden: true
                    sortable: false
                  external_id:
                    display_name: external_id
                    default: false
                    can_be_hidden: true
                    sortable: false
                  folder_id:
                    display_name: Folder ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  internal_id:
                    display_name: internal_id
                    default: true
                    can_be_hidden: true
                    sortable: true
                  is_auteur_generated:
                    display_name: KaneAI Generated
                    default: false
                    can_be_hidden: true
                    sortable: false
                  latest_test_commit_id:
                    display_name: Latest Test Commit ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  organization_id:
                    display_name: Organization ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  preconditions:
                    display_name: Preconditions
                    default: false
                    can_be_hidden: true
                    sortable: false
                  priority:
                    display_name: Priority
                    default: true
                    can_be_hidden: false
                    sortable: true
                  project_id:
                    display_name: Project ID
                    default: false
                    can_be_hidden: true
                    sortable: false
                  status:
                    display_name: Status
                    default: true
                    can_be_hidden: false
                    sortable: false
                  title:
                    display_name: Title
                    default: true
                    can_be_hidden: false
                    sortable: true
                  type:
                    display_name: Type
                    default: true
                    can_be_hidden: false
                    sortable: false
                  updated_at:
                    display_name: Updated At
                    default: false
                    can_be_hidden: true
                    sortable: false
                  updated_by:
                    display_name: Updated By
                    default: false
                    can_be_hidden: true
                    sortable: false
                filterMetadata:
                  automation_status:
                    display_name: Automation Status
                    options:
                      - Automated
                      - Not Automated
                      - To Be Automated
                    type: select
                    custom_filters: false
                  created_at:
                    display_name: Created At
                    scopes:
                      - created_at_condition_before
                      - created_at_condition_after
                      - created_at_condition_on
                      - created_at_condition_between
                    type: time.Time
                    custom_filters: false
                  created_by:
                    display_name: Created By
                    type: int
                    custom_filters: false
                  id:
                    display_name: ''
                    type: string
                    custom_filters: false
                  internal_id:
                    display_name: internal_id
                    type: int
                    custom_filters: false
                  is_auteur_generated:
                    display_name: KaneAI Generated
                    type: bool
                    custom_filters: false
                  jira_issues:
                    display_name: Issues
                    options:
                      - PROJ-123
                    type: select
                    custom_filters: false
                  organization_id:
                    display_name: Organization ID
                    type: int
                    custom_filters: false
                  priority:
                    display_name: Priority
                    options:
                      - Lowest
                      - Low
                      - Medium
                      - High
                      - Highest
                      - Normal
                    type: select
                    custom_filters: false
                  status:
                    display_name: Status
                    options:
                      - Unverified
                      - Faulty
                      - Ready
                      - Live
                      - Archived
                    type: select
                    custom_filters: false
                  title:
                    display_name: Title
                    type: string
                    custom_filters: false
                  type:
                    display_name: Type
                    options:
                      - Accessibility
                      - Acceptance
                      - Compatibility
                      - Destructive
                      - Performance
                      - Integration
                      - Functional
                      - Regression
                      - Smoke & Sanity
                      - Security
                      - User Interface
                      - Usability
                      - Other
                    type: select
                    custom_filters: false
                rbac_metadata:
                  can_create_entity: true
                  can_execute_entity: false
                  can_edit_entity: true
                  can_delete_entity: true
                  can_list_entity: true
                  can_read_entity: true
                  can_update_entity: true
        '422':
          description: Unprocessable Entity
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 08:43:50 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Content-Length:
              schema:
                type: integer
                example: '87'
            Connection:
              schema:
                type: string
                example: keep-alive
            CF-Cache-Status:
              schema:
                type: string
                example: DYNAMIC
            Server:
              schema:
                type: string
                example: cloudflare
            CF-RAY:
              schema:
                type: string
                example: 8a931ab75d437f96-MAA
          content:
            application/json:
              schema:
                type: object
              example:
                type: error
                title: Request Not Processed
                message: Invalid test case provided
  /api/v2/test-cases:
    put:
      tags:
        - Test Cases
      summary: Update Test Case
      description: Update a test case including its steps, metadata, and dynamic fields. This endpoint replaces the separate Test Steps APIs (POST /api/v1/test-steps and PUT /api/v1/test-steps/{test_step_id}). The snapshot_id from the GET response must be included in the request body.
      security:
        - basicAuth: []
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                id:
                  type: string
                  description: The test case ID to update.
                project_id:
                  type: string
                  description: The project ID the test case belongs to.
                title:
                  type: string
                description:
                  type: string
                type:
                  type: string
                preconditions:
                  type: string
                status:
                  type: string
                priority:
                  type: string
                automation_status:
                  type: string
                external_id:
                  type: string
                attachments:
                  type: array
                  items:
                    type: object
                dynamic_fields:
                  type: array
                  items:
                    type: object
                    properties:
                      field_id:
                        type: string
                      value:
                        type: string
                tags:
                  type: array
                  items:
                    type: string
                commit_message:
                  type: string
                snapshot_id:
                  type: string
                  description: Required. Must be taken from the GET /api/v2/test-cases/{test_case_id} response.
                step_events:
                  type: array
                  items:
                    type: object
                    properties:
                      test_step_info_id:
                        type: string
                      step_type:
                        type: string
                        enum: [test_step, module, bdd_scenario]
                      operation:
                        type: string
                        enum: [ADD, DELETE, MODIFY, DRAG&DROP]
                      description:
                        type: string
                      outcome:
                        type: string
                      attachments:
                        type: array
                        items:
                          type: object
                      bdd_info_id:
                        type: string
                        description: >-
                          Unique identifier for the BDD scenario entry. Use a custom UUID (e.g. "custom-<uuid>") when adding a new BDD scenario.
                          Required when step_type is bdd_scenario.
                      bdd_data:
                        type: string
                        description: >-
                          The BDD scenario data content. Required when step_type is bdd_scenario.
                      parent_step_info_id:
                        type: string
                        description: >-
                          ID of the parent step for nesting. Only include this field when adding a child step under an existing step.
                          Omit this field entirely if the step does not have a parent.
                override:
                  type: boolean
              required:
                - id
                - project_id
                - snapshot_id
                - commit_message
            example:
              id: sample_test_case_id
              project_id: sample_project_id
              title: Sample Test Case Title
              description: '<p>Updated test case description</p>'
              type: ''
              preconditions: 'Sample preconditions'
              status: ''
              priority: Medium
              automation_status: Not Automated
              external_id: TC-1
              attachments: []
              dynamic_fields:
                - field_id: sample_field_id_1
                  value: '1234567'
                - field_id: sample_field_id_2
                  value: 'Yes'
              tags:
                - regression
                - smoke
              commit_message: 'Updated test case'
              snapshot_id: sample_snapshot_id
              step_events:
                - test_step_info_id: sample_step_id_1
                  step_type: step
                  operation: MODIFY
                  description: '<p>Updated step 1 description</p>'
                  outcome: '<p>Updated step 1 expected outcome</p>'
                  attachments: []
                - test_step_info_id: sample_step_id_2
                  step_type: step
                  operation: MODIFY
                  description: '<p>Updated step 2 description</p>'
                  outcome: '<p>Updated step 2 expected outcome</p>'
                  attachments: []
                - test_step_info_id: custom-new-step-id
                  step_type: step
                  operation: ADD
                  description: '<p>New step description</p>'
                  outcome: '<p>New step expected outcome</p>'
                  attachments: []
                  parent_step_info_id: sample_step_id_2
                - bdd_info_id: custom-d8689042-a678-4d0f-890a-5acf64e5236a
                  step_type: bdd_scenario
                  operation: ADD
                  test_step_info_id: custom-d8689042-a678-4d0f-890a-5acf64e5236a
                  bdd_data: 'Given user is on login page\nWhen user enters valid credentials\nThen user is logged in'
              override: false
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Fri, 26 Jul 2024 08:43:14 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
          content:
            application/json:
              schema:
                type: object
              example:
                message: Test case updated successfully
                type: Success
                data:
                  snapshot_id: sample_snapshot_id
        '422':
          description: Unprocessable Entity
          content:
            application/json:
              schema:
                type: object
              example:
                type: error
                title: Request Not Processed
                message: Invalid test case provided
  /api/v1/test-execution-history/{test_case_id}:
    get:
      tags:
        - Execution History
      summary: Test Execution History By Test Case ID
      security:
        - basicAuth: []
      parameters:
        - name: test_case_id
          in: path
          schema:
            type: string
          required: true
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/test-execution-history/jira/{Jira_issue_id}:
    get:
      tags:
        - Execution History
      summary: Test Execution History By Jira ID
      security:
        - basicAuth: []
      parameters:
        - name: Jira_issue_id
          in: path
          schema:
            type: string
          required: true
      responses:
        '200':
          description: Successful response
          content:
            application/json: {}
  /api/v1/test-steps:
    post:
      tags:
        - Test Steps
      summary: Create Test Steps For TestCase
      deprecated: true
      description: 'Deprecated: Use PUT /api/v2/test-cases with step_events instead.'
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                test_case_id: 'test_case_id'
                test_steps:
                  - serial_no: 1
                    description: enter emails and password
                    outcome: Login error
                  - serial_no: 2
                    description: enter emails and password
                    outcome: Login error
      security:
        - basicAuth: []
      responses:
        '200':
          description: OK
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Mon, 11 Dec 2023 11:51:33 GMT
            Content-Length:
              schema:
                type: integer
                example: '63'
          content:
            application/json:
              schema:
                type: object
              example:
                message: Test steps created successfully
                type: Success
  /api/v1/test-steps/{test_step_id}:
    put:
      tags:
        - Test Steps
      summary: Update Test Step By ID
      deprecated: true
      description: 'Deprecated: Use PUT /api/v2/test-cases with step_events instead.'
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                serial_no: 1
                description: updated description
                outcome: 'login outcome '
      security:
        - basicAuth: []
      parameters:
        - name: test_step_id
          in: path
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Mon, 11 Dec 2023 12:03:26 GMT
            Content-Length:
              schema:
                type: integer
                example: '62'
          content:
            application/json:
              schema:
                type: object
              example:
                message: Test step updated successfully
                type: Success
  /api/v1/jira/{test_case_id}:
    get:
      tags:
        - Jira Flow
      summary: Get All Jira Issues By TestCaseID
      security:
        - basicAuth: []
      parameters:
        - name: test_case_id
          in: path
          schema:
            type: string
          required: true
      responses:
        '200':
          description: OK
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 28 Feb 2024 07:30:38 GMT
            Content-Length:
              schema:
                type: integer
                example: '357'
          content:
            application/json:
              schema:
                type: object
              example:
                data:
                  - id: 'test_case_id'
                    organization_id: 33275539
                    created_at: '2024-02-28T07:13:52Z'
                    updated_at: '2024-02-28T07:13:52Z'
                    entity_id: "entity_id"
                    entity_type: test_case
                    project_id: "project_id"
                    jira_id: jira_id
                    jira_link: jira_link
                    created_by: 862914
                    updated_by: 862914
                    deleted_at: null
  /api/v1/jira/test-case/{Jira_issue_id}:
    get:
      tags:
        - Jira Flow
      summary: Get Test Cases by Jira ID
      security:
        - basicAuth: []
      parameters:
        - name: Jira_issue_id
          in: path
          schema:
            type: string
          required: true
        - name: page
          in: query
          schema:
            type: integer
          example: '10'
        - name: per_page
          in: query
          schema:
            type: integer
          example: '10'
      responses:
        '200':
          description: OK
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Tue, 30 Jan 2024 07:22:24 GMT
            Content-Length:
              schema:
                type: integer
                example: '444'
          content:
            application/json:
              schema:
                type: object
              example:
                id: "Jira_issue_id"
                organization_id: 33275539
                created_at: '2024-01-15T13:19:56Z'
                updated_at: '2024-01-29T21:32:14Z'
                project_id: "project_id"
                internal_id: 1
                external_id: null
                title: login with right creds
                description: NA
                priority: medium
                type: Regression
                preconditions: preconditions
                status: draft
                estimated_time: 20
                created_by: 862914
                updated_by: 862914
                deleted_at: null
                test_steps: null
  /api/v1/jira:
    post:
      tags:
        - Jira Flow
      summary: Link Jira Issue
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                project_id: 'project_id'
                entity_id: 'test_case_id'
                entity_type: test_case
                jira_id: 'org_id:jira_issue_id'
      security:
        - basicAuth: []
      responses:
        '200':
          description: OK
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Tue, 30 Jan 2024 03:35:58 GMT
            Content-Length:
              schema:
                type: integer
                example: '63'
          content:
            application/json:
              schema:
                type: object
              example:
                message: Jira Issue linked successfully
                type: Success
  /api/v1/jira/remove:
    post:
      tags:
        - Jira Flow
      summary: Remove Jira Issue
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                project_id: 'project_id'
                entity_id: 'test_case_id'
                entity_type: test_case
                jira_id: jira_issue_id
      security:
        - basicAuth: []
      responses:
        '200':
          description: OK
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 28 Feb 2024 08:00:25 GMT
            Content-Length:
              schema:
                type: integer
                example: '63'
          content:
            application/json:
              schema:
                type: object
              example:
                message: Jira Issue unlinked successfully
                type: Success

  /api/v1/test-run:
    post:
      tags:
        - Test Runs
      summary: Create Test Run
      requestBody:
        content:
          application/json:
            schema:
              type: object
              example:
                title: New Test Run
                objective: Sample Discreption
                test_run_instances: []
                tags:
                  - tag1
                  - tag2
                  - tag3
                project_id: 'sample project id'
                is_auteur_generated: false
      security:
        - basicAuth: []
      responses:
        '200':
          description: OK
          headers:
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Date:
              schema:
                type: string
                example: Wed, 28 Feb 2024 08:00:25 GMT
            Content-Length:
              schema:
                type: integer
                example: '63'
          content:
            application/json:
              schema:
                type: object
              example:
                message: Test Run created successfully
                type: Success
                id: 'test_run_id'
  /api/v1/projects/{project_id}/test-runs:
    get:
      tags:
          - Test Runs
      summary: Get All Test Runs By Project ID
      security:
          -   basicAuth: [ ]
      parameters:
          -   name: project_id
              in: path
              schema:
                  type: string
              required: true
          -   name: page
              in: query
              schema:
                  type: integer
              required: false
          -   name: per_page
              in: query
              schema:
                    type: integer
              required: false
      responses:
          '200':
              description: Successfully retrieved test runs
              content:
                  application/json:
                      schema:
                          type: object
                          properties:
                              data:
                                  type: array
                                  items:
                                      type: object
                                      properties:
                                          id:
                                              type: string
                                          title:
                                              type: string
                                          project_id:
                                              type: string
                                          objective:
                                              type: string
                                          is_auteur_generated:
                                              type: boolean
                                          tags:
                                              type: array
                                              items:
                                                  type: object
                                                  properties:
                                                      tag_id:
                                                          type: integer
                                                      name:
                                                          type: string
                                          status:
                                              type: string
                                              enum: [ Passed, Failed, Skipped, "In Progress", "Not Started" ]
                                          type:
                                              type: string
                                          build_state:
                                              type: string
                                              enum: [ active, archived ]
                                          created_at:
                                              type: string
                                              format: date-time
                                          updated_at:
                                              type: string
                                              format: date-time
                                          created_by:
                                              type: integer
                                          updated_by:
                                              type: integer
                                          run_result:
                                              type: object
                                              properties:
                                                  total_test:
                                                      type: integer
                                                  passed:
                                                      type: integer
                                                  failed:
                                                      type: integer
                                                  skipped:
                                                      type: integer
                                                  not_started:
                                                      type: integer
                                          is_build_disabled:
                                              type: boolean
                                          total_test_cases:
                                              type: integer
                                          total_environments:
                                              type: integer
                                          total_run_instances:
                                              type: integer
                                          complete_percent:
                                              type: number
                                              format: float
                              columnMetadata:
                                  type: object
                                  additionalProperties:
                                      type: object
                                      properties:
                                          display_name:
                                              type: string
                                          default:
                                              type: boolean
                                          can_be_hidden:
                                              type: boolean
                                          sortable:
                                              type: boolean
                              filterMetadata:
                                  type: object
                                  additionalProperties:
                                      type: object
                                      properties:
                                          display_name:
                                              type: string
                                          options:
                                              type: array
                                              items:
                                                  type: string
                                          type:
                                              type: string
                                          scopes:
                                              type: array
                                              items:
                                                  type: string
                              pagination:
                                  type: object
                                  properties:
                                      current_page:
                                          type: integer
                                      last_page:
                                          type: integer
                                      per_page:
                                          type: integer
                                      total:
                                          type: integer
                      example:
                          data:
                              -   id: "test_run_id"
                                  title: "Title"
                                  project_id: "project_id"
                                  objective: ""
                                  is_auteur_generated: false
                                  tags: null
                                  status: "In Progress"
                                  type: "Manual"
                                  build_state: "active"
                                  created_at: "2025-01-14T10:38:54Z"
                                  updated_at: "2025-01-15T11:17:48Z"
                                  created_by: user_id
                                  updated_by: user_id
                                  run_result:
                                      total_test: 84
                                      passed: 14
                                      failed: 0
                                      skipped: 0
                                      not_started: 70
                                  is_build_disabled: false
                                  total_test_cases: 2
                                  total_environments: 42
                                  total_run_instances: 84
                                  complete_percent: 16.666666666666664
                          columnMetadata:
                              build_state:
                                  display_name: "Build State"
                                  default: true
                                  can_be_hidden: false
                                  sortable: false
                          filterMetadata:
                              build_state:
                                  display_name: "Build State"
                                  options: [ "active", "archived" ]
                                  type: "select"
                          pagination:
                              current_page: 1
                              last_page: 2
                              per_page: 10
                              total: 11
          '401':
              description: Unauthorized
          '403':
              description: Forbidden
          '404':
              description: Project not found


  /api/v1/test-run/{test_run_id}:
    get:
        tags:
          - Test Runs
        summary: Get Test Run By ID
        security:
          - basicAuth: []
        parameters:
          - name: test_run_id
            in: path
            schema:
              type: string
            required: true
        responses:
          '200':
            description: OK
            headers:
              Content-Type:
                schema:
                  type: string
                  example: application/json; charset=utf-8
              Date:
                schema:
                  type: string
                  example: Wed, 28 Feb 2024 08:00:25 GMT
              Content-Length:
                schema:
                  type: integer
                  example: '63'
            content:
              application/json:
                schema:
                  type: object
                example:
                  id: 'testrun_id'
                  title: New Test Run
                  objective: Sample Discription
                  test_run_instances: []
                  tags:
                    - tag1
                    - tag2
                    - tag3
                  project_id: 'project_id'
                  is_auteur_generated: false
          '422':
            description: Unprocessable Entity
            headers:
              Date:
                schema:
                  type: string
                  example: Wed, 28 Feb 2024 08:00:25 GMT
              Content-Type:
                schema:
                  type: string
                  example: application/json; charset=utf-8
              Content-Length:
                schema:
                  type: integer
                  example: '63'
            content:
              application/json:
                schema:
                  type: object
                example:
                  message: Invalid test run ID
                  type: Error
    delete:
        tags:
            - Test Runs
        summary: Delete Test Run
        security:
            - basicAuth: []
        parameters:
            - name: test_run_id
              in: path
              schema:
                  type: string
              required: true
        responses:
            '200':
                description: OK
                headers:
                    Content-Type:
                        schema:
                            type: string
                            example: application/json; charset=utf-8
                    Date:
                        schema:
                            type: string
                            example: Wed, 28 Feb 2024 08:00:25
                    Content-Length:
                        schema:
                            type: integer
                            example: '63'
                content:
                    application/json:
                        schema:
                            type: object
                        example:
                            message: Test Run deleted successfully
                            type: Success
    put:
        tags:
            - Test Runs
        summary: Update Test Run By ID
        security:
            - basicAuth: []
        parameters:
            - name: test_run_id
              in: path
              schema:
                  type: string
              required: true
        requestBody:
            content:
                application/json:
                    schema:
                        type: object
                        example:
                            id: 'sample_id'
                            title: New name Test Run
                            objective: Updated Discription
                            tags: []
                            is_auteur_generated: true
                            type: Manual
                            test_run_instances: [
                            {
                                test_case_id: 'test_case_id',
                                assignee: 2144228,
                                priority: Medium,
                                name: Execute API with User Details,
                                serial_no: 1,
                                environment_id: 1793,
                                dataset_id: 'dataset_id',
                                dataset_version_id: 'dataset_version_id',
                                dataset_row_id: 'dataset_row_id'
                            }
                            ]
                            project_id: 'project_id'
        responses:
            '200':
                description: OK
                headers:
                    Content-Type:
                        schema:
                            type: string
                            example: application/json; charset=utf-8
                    Date:
                        schema:
                            type: string
                            example: Wed, 28 Feb 2024 08:00:25
                    Content-Length:
                        schema:
                            type: integer
                            example: '63'
                content:
                    application/json:
                        schema:
                            type: object
                        example:
                            message: Test Run updated successfully
                            type: Success

  /api/v1/test-run/duplicate/{test_run_id}:
      post:
          tags:
              - Test Runs
          summary: Duplicate Test Run
          security:
              -   basicAuth: [ ]
          parameters:
              -   name: test_run_id
                  in: path
                  schema:
                      type: string
                  required: true
          requestBody:
              content:
                  application/json:
                      schema:
                          type: object
                      example: { }
          responses:
              '200':
                  description: OK
                  headers:
                      Content-Type:
                          schema:
                              type: string
                              example: application/json; charset=utf-8
                      Date:
                          schema:
                              type: string
                              example: Wed, 28 Feb 2024 08:00:25
                      Content-Length:
                          schema:
                              type: integer
                              example: 63
                  content:
                      application/json:
                          schema:
                              type: object
                          example:
                              message: Test Run duplicated successfully
                              type: Success
                              id: 'new_id'
  /api/v1/test-run/instances/{test_run_id}:
    get:
        tags:
            - Test Runs
        summary: Get Test Run Instances by Test Run ID
        description: Retrieves test run instances with details and supports filtering
        security:
              -   basicAuth: [ ]
        parameters:
            - name: test_run_id
              in: path
              required: true
              schema:
                  type: string
            - name: page
              in: query
              required: false
              schema:
                  type: integer
                  default: 1
            - name: per_page
              in: query
              required: false
              schema:
                  type: integer
                  default: 10
            - name: filter[status]
              in: query
              required: false
              schema:
                  type: string
            - name: filter[assignee]
              in: query
              required: false
              schema:
                  type: integer
        responses:
            '200':
                description: Successfully retrieved test run instances
                content:
                    application/json:
                        schema:
                            type: object
                            properties:
                                test_run_details:
                                    type: object
                                    properties:
                                        id:
                                            type: string
                                        title:
                                            type: string
                                        project_id:
                                            type: string
                                        objective:
                                            type: string
                                        is_auteur_generated:
                                            type: boolean
                                        tags:
                                            type: array
                                            items:
                                                type: string
                                        status:
                                            type: string
                                        type:
                                            type: string
                                        build_state:
                                            type: string
                                        created_at:
                                            type: string
                                            format: date-time
                                        updated_at:
                                            type: string
                                            format: date-time
                                        created_by:
                                            type: integer
                                        updated_by:
                                            type: integer
                                        run_result:
                                            type: object
                                            properties:
                                                total_test:
                                                    type: integer
                                                passed:
                                                    type: integer
                                                failed:
                                                    type: integer
                                                skipped:
                                                    type: integer
                                                not_started:
                                                    type: integer
                                        is_build_disabled:
                                            type: boolean
                                        total_test_cases:
                                            type: integer
                                        total_environments:
                                            type: integer
                                        total_run_instances:
                                            type: integer
                                        complete_percent:
                                            type: number
                                test_run_instances:
                                    type: object
                                    properties:
                                        data:
                                            type: array
                                            items:
                                                type: object
                                                properties:
                                                    id:
                                                        type: integer
                                                    test_case_id:
                                                        type: string
                                                    title:
                                                        type: string
                                                    description:
                                                        type: string
                                                    priority:
                                                        type: string
                                                        enum: [Lowest, Low, Medium, High, Highest]
                                                    type:
                                                        type: string
                                                    internal_id:
                                                        type: string
                                                    order_no:
                                                        type: integer
                                                    status:
                                                        type: string
                                                        enum: [Passed, Failed, Not Started]
                                                    assignee:
                                                        type: integer
                                                    automation_status:
                                                        type: string
                                                        enum: [Automated, Not Automated, To Be Automated]
                                                    remarks:
                                                        type: string
                                                    environment:
                                                        type: object
                                                        properties:
                                                            id:
                                                                type: integer
                                                            name:
                                                                type: string
                                                            brand:
                                                                type: string
                                                            os_name:
                                                                type: string
                                                            os:
                                                                type: string
                                                            os_version:
                                                                type: string
                                                            device:
                                                                type: string
                                                            platform:
                                                                type: string
                                                            browser:
                                                                type: string
                                                            browser_version:
                                                                type: string
                                                            resolution:
                                                                type: string
                                                            is_complete:
                                                                type: boolean
                                                            order_no:
                                                                type: integer
                                                                nullable: true
                                                            assignee:
                                                                type: integer
                                                                nullable: true
                                                    is_build_disabled:
                                                        type: boolean
                                                    dataset_details:
                                                        type: object
                                                        nullable: true
                                                    auteur_test_id:
                                                        type: string
                                                        nullable: true
                                                    is_auteur_generated:
                                                        type: boolean
                                                    linked_test_url:
                                                        type: string
                                                        nullable: true
                                                    source:
                                                        type: string
                                        columnMetadata:
                                            type: object
                                            additionalProperties:
                                                type: object
                                                properties:
                                                    display_name:
                                                        type: string
                                                    default:
                                                        type: boolean
                                                    can_be_hidden:
                                                        type: boolean
                                                    sortable:
                                                        type: boolean
                                        filterMetadata:
                                            type: object
                                            additionalProperties:
                                                type: object
                                                properties:
                                                    display_name:
                                                        type: string
                                                    options:
                                                        type: array
                                                        items:
                                                            type: string
                                                    type:
                                                        type: string
                                                    scopes:
                                                        type: array
                                                        items:
                                                            type: string
                                        pagination:
                                            type: object
                                            properties:
                                                current_page:
                                                    type: integer
                                                last_page:
                                                    type: integer
                                                per_page:
                                                    type: integer
                                                total:
                                                    type: integer
            '400':
                description: Bad request - Invalid parameters
            '401':
                description: Unauthorized
            '404':
                description: Test run not found
  /api/v1/test-run/instance/{test_instance_id}:
    put:
        tags:
            - Test Runs
        summary: Update Test Run Instance
        security:
            - basicAuth: []
        parameters:
            - name: test_instance_id
              in: path
              schema:
                  type: string
              required: true
        requestBody:
            content:
                application/json:
                    schema:
                        type: object
                        example:
                            status: Passed
                            assignee: 1000167238
        responses:
            '200':
                description: OK
                headers:
                    Content-Type:
                        schema:
                            type: string
                            example: application/json; charset=utf-8
                    Date:
                        schema:
                            type: string
                            example: Wed, 28 Feb 2024 08:00:25
                    Content-Length:
                        schema:
                            type: integer
                            example: '63'
                content:
                    application/json:
                        schema:
                            type: object
                        example:
                            message: Test Run Instance updated successfully
                            type: Success
            '422':
                description: Unprocessable Entity
                headers:
                    Date:
                        schema:
                            type: string
                            example: Wed, 28 Feb 2024 08:00:25
                    Content-Type:
                        schema:
                            type: string
                            example: application/json; charset=utf-8
                    Content-Length:
                        schema:
                            type: integer
                            example: '63'
                content:
                    application/json:
                        schema:
                            type: object
                        example:
                            message: Invalid test instance ID
                            type: Error
  /api/v1/test-run/{test_run_id}/bulk-update:
    put:
        tags:
            - Test Runs
        summary: Bulk Update Test Run Instances
        security:
            - basicAuth: []
        parameters:
            - name: test_run_id
              in: path
              required: true
              schema:
                  type: string
        requestBody:
            content:
                application/json:
                    schema:
                        type: object
                        properties:
                            test_run_instances:
                                type: array
                                items:
                                    type: object
                                    properties:
                                        id:
                                            type: integer
                                        status:
                                            type: string
                                        assignee:
                                            type: integer
                        example:
                            test_run_instances:
                                - id: 55793
                                  status: "Passed"
                                  assignee: 1000167238

        responses:
            '200':
                description: OK
                headers:
                    Content-Type:
                        schema:
                            type: string
                            example: application/json; charset=utf-8
                    Date:
                        schema:
                            type: string
                            example: Wed, 28 Feb 2024 08:00:25
                    Content-Length:
                        schema:
                            type: integer
                            example: 63
                content:
                    application/json:
                        schema:
                            type: object
                        example:
                            message: Test Run Instances updated successfully
                            type: Success
            '422':
                description: Unprocessable Entity
                headers:
                    Date:
                        schema:
                            type: string
                            example: Wed, 28 Feb 2024 08:00:25
                    Content-Type:
                        schema:
                            type: string
                            example: application/json; charset=utf-8
                    Content-Length:
                        schema:
                            type: integer
                            example: '63'
                content:
                    application/json:
                        schema:
                            type: object
                        example:
                            message: Invalid test run ID
                            type: Error

  /api/v1/test-run/test-run-step/{test_run_step_id}:
    put:
        tags:
            - Test Runs
        summary: Update Test Run Step
        security:
            - basicAuth: []
        parameters:
            - name: test_run_step_id
              in: path
              schema:
                  type: string
              required: true
        requestBody:
            content:
                application/json:
                    schema:
                        type: object
                        example:
                            status: "Passed"
                            remarks: "Sample remarks"
                            attachment_urls: ["url1","url2"]
        responses:
            '200':
                description: OK
                headers:
                    Content-Type:
                        schema:
                            type: string
                            example: application/json; charset=utf-8
                    Date:
                        schema:
                            type: string
                            example: Wed, 28 Feb 2024 08:00:25
                    Content-Length:
                        schema:
                            type: integer
                            example: '63'
                content:
                    application/json:
                        schema:
                            type: object
                        example:
                            message: Test Run Step updated successfully
                            type: Success
            '422':
                description: Unprocessable Entity
                headers:
                    Date:
                        schema:
                            type: string
                            example: Wed, 28 Feb 2024 08:00:25
                    Content-Type:
                        schema:
                            type: string
                            example: application/json; charset=utf-8
                    Content-Length:
                        schema:
                            type: integer
                            example: '63'
                content:
                    application/json:
                        schema:
                            type: object
                        example:
                            message: Invalid test instance ID
                            type: Error
  /api/v1/test-run/test-run-instance/{test_instance_id}:
        get:
            tags:
                - Test Runs
            summary: Get Test Run Instance By ID
            security:
                - basicAuth: []
            parameters:
                - name: test_instance_id
                  in: path
                  schema:
                      type: string
                  required: true
            responses:
                '200':
                    description: OK
                    headers:
                        Content-Type:
                            schema:
                                type: string
                                example: application/json; charset=utf-8
                        Date:
                            schema:
                                type: string
                                example: Wed, 28 Feb 2024 08:00:25
                        Content-Length:
                            schema:
                                type: integer
                                example: '63'
                    content:
                        application/json:
                            schema:
                                type: object
                            example:
                                type: 'NA'
                                time_taken: null
                                test_steps_count: 0
                                test_run_title: Sample Test Run
                                test_run_id: 'test_run_id'
                                test_case_id: 'test_case_id'
                                executed_by: 'user_id'
                                id: 'sample_id'
                                internal_id: "id"
                                order_no: 2
                                priority: "Medium"
                                project_id: "project_id"
                                remarks: ""
                                result: "Passed"
                                run_testcase_disable: false
                                source: "external"
                                started_at: null
                                tags: [ ]
                                test_build_steps: [ ]
                '422':
                    description: Unprocessable Entity
                    headers:
                        Date:
                            schema:
                                type: string
                                example: Wed, 28 Feb 2024 08:00:25
                        Content-Type:
                            schema:
                                type: string
                                example: application/json; charset=utf-8
                        Content-Length:
                            schema:
                                type: integer
                                example: '63'
                    content:
                        application/json:
                            schema:
                                type: object
                            example:
                                message: Invalid test instance ID
                                type: Error


  /api/v1/test-run/archive/{test_run_id}:
      put:
        tags:
              - Test Runs
        summary: Archive Test Run By ID
        security:
                - basicAuth: []
        parameters:
                - name: test_run_id
                  in: path
                  schema:
                      type: string
                  required: true
        requestBody:
            content:
                application/json:
                    schema:
                        type: object
                        example:
                            build_state: "archived"
        responses:
                '200':
                    description: OK
                    headers:
                        Content-Type:
                            schema:
                                type: string
                                example: application/json; charset=utf-8
                        Date:
                            schema:
                                type: string
                                example: Wed, 28 Feb 2024 08:00:25
                        Content-Length:
                            schema:
                                type: integer
                                example: 63
                    content:
                        application/json:
                            schema:
                                type: object
                            example:
                                message: Test Run updated successfully
                                type: Success
                '422':
                    description: Unprocessable Entity
                    headers:
                        Date:
                            schema:
                                type: string
                                example: Wed, 28 Feb 2024 08:00:25
                        Content-Type:
                            schema:
                                type: string
                                example: application/json; charset=utf-8
                        Content-Length:
                            schema:
                                type: integer
                                example: 63
                    content:
                        application/json:
                            schema:
                                type: object
                            example:
                                message: Invalid test run ID
                                type: Error
```

---


## 8. HyperExecute

**File:** `hyperexecute.yaml` | **Size:** 47376 bytes | **Lines:** 1528

```yaml
openapi: 3.0.0
info:
  title: TestMu AI HyperExecute API Documentation
  version: 1.0.1
servers:
    - url: 'https://api.hyperexecute.cloud'
paths:
  /v1.0/secrets/create:
    put:
      tags:
        - Secrets
      summary: Create Secrets and store sensitive information in the vault.
      description: This API allows you to securely [**create and save secrets**](https://www.lambdatest.com/support/docs/hyperexecute-how-to-save-and-manage-secrets/#create-a-new-secret) like API keys or sensitive data, ensuring they remain protected throughout your testing. Industry-standard algorithms encrypt each secret.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateSecret'
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SecretCreatedSuccessfully'
      security:
        - basicAuth: []
  /v1.0/secrets/list/{username}:
    get:
      tags:
        - Secrets
      summary: Retrieve all secrets stored in your account.
      description: This API lets you fetch all the secrets associated with your [**username**](https://www.lambdatest.com/support/docs/hyperexecute-how-to-get-my-username-and-access-key/). You get a comprehensive list of your stored confidential information, making it easier to manage and verify your secrets.
      parameters:
      - name: username
        in: path
        description: Enter your LambdaTest username
        required: true
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SecretList'
      security:
        - basicAuth: []
  /v1.0/secrets/delete:
    post:
      tags:
        - Secrets
      summary: Delete specific secrets permanently from the vault.
      description: This API permanently [**removes specified secrets**](https://www.lambdatest.com/support/docs/hyperexecute-how-to-save-and-manage-secrets/#delete-the-secrets) from the secure vault when they're no longer needed, helping maintain security and compliance with data retention policies.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/DeleteSecret'
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/DeleteSecretSuccessfully'
      security:
        - basicAuth: []
  /v2.0/browsers:
    get:
      tags:
        - Browsers
      summary: Get a list of all browsers supported in HyperExecute.
      description: This API returns a current list of all supported browser names and versions for a specific operating system in HyperExecute. This information assists you in planning your cross-browser testing strategy and ensuring compatibility across multiple browser environments.
      parameters:
      - name: platform
        in: query
        description: windows 11, windows 10, macos monterey, macos ventura, ubuntu 20
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: stable
        in: query
        description: If true, will return only stable version of browsers.
        required: false
        style: form
        explode: true
        schema:
          type: boolean
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/BrowserList'
      security:
        - basicAuth: []
  /v2.0/job/{jobID}:
    get:
      tags:
        - Jobs
      summary: Check the status of a Job and its associated Tasks.
      description: This API retrieve the [**status**](https://www.lambdatest.com/support/docs/hyperexecute-status/) of a specific [**Job**](https://www.lambdatest.com/support/docs/hyperexecute-guided-walkthrough/#jobs-page) by providing the `jobID`. It returns detailed information about each task's progress, including their completion status, execution times, and any errors encountered, giving you a full overview of the job lifecycle
      parameters:
      - name: jobID
        in: path
        description: "Enter your Job ID"
        required: true
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/JobStatusData'
      security:
        - basicAuth: []
  /v2.0/job/{jobID}/scenarios:
    get:
      tags:
        - Jobs
      summary: Fetch Scenario details associated with your Job ID
      description: This API retrieves scenario-level execution details for a given Job ID. A scenario in HyperExecute represents a logical stage or group of test cases executed within a [**Job**](https://www.lambdatest.com/support/docs/hyperexecute-guided-walkthrough/#jobs-page). Each job consists of multiple tasks, and each task may contain one or more scenarios.
      parameters:
      - name: jobID
        in: path
        description: "Enter your Job ID"
        required: true
        style: form
        explode: true
        schema:
          type: string
      - name: limit
        in: query
        required: false
        description: Limits the number of scenarios shown in the response (default is 10, max is 20).
        schema:
          type: integer
          default: 10
          maximum: 20
      - name: cursor
        in: query
        required: false
        description: |
            Helps in moving across pagination. Accepts an "id" value and returns scenarios with an "id" greater than or equal to it.
        schema:
          type: string
      - name: status
        in: query
        required: false
        description: Filter scenarios based on their execution status.
        schema:
          type: string
          example: "passed"
      - name: search_text
        in: query
        required: false
        description: Filter response based on occurrences of the search text in the 'name' field.
        schema:
          type: string
          example: "regression_test"
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/JobScenarioData'
      security:
        - basicAuth: []
  /v2.0/job/{jobID}/sessions:
    get:
      tags:
        - Jobs
      summary: Fetch Session-Level details associated with your Job ID.
      description: This API retrieves session-level execution details for all tests that were executed as part of a given Job ID. A session represents an individual test execution instance, providing more granular insights into the execution of test cases.
      parameters:
      - name: jobID
        in: path
        description: "Enter your Job ID"
        required: true
        style: form
        explode: true
        schema:
          type: string
      - name: limit
        in: query
        required: false
        description: Limits the number of sessions shown in the response (default is 10, max is 20).
        schema:
          type: integer
          default: 10
          maximum: 20
      - name: cursor
        in: query
        required: false
        description: |
          Helps in moving across pagination. Accepts an "id" value and returns sessions with an "id" greater than or equal to it.
        schema:
          type: string
      - name: status
        in: query
        required: false
        description: Filter sessions based on their execution status.
        schema:
          type: string
          example: "passed"
      - name: search_text
        in: query
        required: false
        description: Filter response based on occurrences of the search text in the 'scenario_name' field.
        schema:
          type: string
          example: "regression_test"
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/JobSessionData'
      security:
        - basicAuth: []
  /v2.0/stage/{taskID}:
    get:
      tags:
        - Jobs
      summary: View all stages executed within a specific task
      description: This API allows you to track all the stages that were part of a particular [**Task**](https://www.lambdatest.com/support/docs/hyperexecute-status/#2-task-level-status). By sending a GET request with the `taskID`, you get a complete breakdown of each stage executed.
      parameters:
      - name: taskID
        in: path
        description: Enter your Task ID of the Job
        required: true
        style: form
        explode: true
        schema:
          type: string
      - name: search_text
        in: query
        description: Implement filtereation based on scenario name
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: scenario_only
        in: query
        description: If set to false, it will render the data of pre, post and scenario level. Else it will show only scenario level data.
        required: false
        style: form
        explode: true
        schema:
          type: boolean
      responses:
        200:
          description: When "scenario_only" is set to "false"
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StageListScenarioResponseFalse'
        2OO:
          description: When "scenario_only" is set to "true"
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StageListScenarioResponseTrue'
      security:
        - basicAuth: []
  /v1.0/stage-tests/{stageID}:
    get:
      tags:
        - Jobs
      summary: Get detailed test results within a specific stage.
      description: This API provides a deep dive into the tests conducted in a particular [**Stage**](https://www.lambdatest.com/support/docs/hyperexecute-status/#3-stage-level-status). By specifying the `stageID`, you receive information about each test, including success or failure, making it easier to pinpoint where things went right or wrong during execution.
      parameters:
      - name: stageID
        in: path
        description: Enter the stage ID
        required: true
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StageTest'
      security:
        - basicAuth: []
  /v1.0/stage/{stageID}/logs:
    get:
      tags:
        - Jobs
      summary: Get logs for a specific stage of a job.
      description: This API provides access to the logs generated during a particular stage within a [**Job**](https://www.lambdatest.com/support/docs/hyperexecute-status/#1-job-level-status). The logs are essential for troubleshooting and understanding the events that took place during that [**Stage**](https://www.lambdatest.com/support/docs/hyperexecute-status/#3-stage-level-status), aiding in quick issue identification and resolution.
      parameters:
      - name: stageID
        in: path
        description: Enter the stage ID
        required: true
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SuccessStageLogs'
        500:
          description: Internal Server Error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/FailedStageLogs'
      security:
        - basicAuth: []
  /v1.0/job/{number}/abort:
    put:
      tags:
        - Jobs
      summary: Abort an ongoing job execution immediately.
      description: This API is used to abort a running [**Job**](https://www.lambdatest.com/support/docs/hyperexecute-status/#1-job-level-status) that is no longer required. You can immediately terminate all associated processes, conserving resources and preventing unnecessary execution.
      parameters:
      - name: number
        in: path
        description: Write your Job Number to abort that particular Job
        required: true
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successfull Operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AbortJob'
      security:
        - basicAuth: []
  /v1.0/jobs:
    get:
      tags:
        - Jobs
      summary: List all the Jobs of your organization.
      description: This API is used to list all the Jobs of your organization.
      parameters:
      - name: show_test_summary
        in: query
        # description:
        required: false
        style: form
        explode: true
        schema:
          type: boolean
      - name: limit
        in: query
        description: Total number of Jobs to be rendered
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: is_cursor_base_pagination
        in: query
        # description:
        required: true
        explode: true
        schema:
          type: string
          default: true
          example: true
      responses:
        200:
          description: Successfull Operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/JobList'
      security:
        - basicAuth: []
        
  /v2.0/job/{jobID}/artefacts:
    get:
      tags:
        - Artifacts
      summary: Retrieve the metadata of all artifacts generated by a job.
      description: This API fetches the metadata of all the [**artifacts**](https://www.lambdatest.com/support/docs/hyperexecute-artifacts/) that were produced during the execution of a Job. 
      parameters:
      - name: jobID
        in: path
        description: Enter your Job ID
        required: true
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ArtifactList'
      security:
        - basicAuth: []
  /v2.0/artefacts/{jobID}/download:
    get:
      tags:
        - Artifacts
      summary: Download artifacts from a specific Job
      description: This API allows you to download a bundle of all [**artifacts**](https://www.lambdatest.com/support/docs/hyperexecute-artifacts/) created during a job by providing the `jobID`. It’s ideal for archiving results or for conducting offline examination of logs and outputs to debug or verify test behavior.
      parameters:
      - name: jobID
        in: path
        description: Enter the Job ID
        required: true
        style: form
        explode: true
        schema:
          type: string
      - name: name
        in: query
        description: Enter the name of the artifact
        required: true
        style: form
        explode: true
        schema:
          type: string
      security:
        - basicAuth: []

  /v1.0/categorizederrors:
    get:
      tags:
        - RCA
      summary: Fetch RCA of your Task.
      description: This API is used to fetch the RCA data for your required task id.
      parameters:
      - name: taskId
        in: query
        description: Enter the Task ID of your Job
        required: true
        style: form
        explode: true
        schema:
          type: string
      - name: order
        in: query
        description: Enter your order number. Example= 4
        required: true
        style: form
        explode: true
        schema:
          type: integer
      - name: iteration
        in: query
        # description:
        required: false
        style: form
        explode: true
        schema:
          type: integer
      responses:
        200:
          description: Successfull Operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/JobRCA'
      security:
        - basicAuth: []
components:
  schemas:
    
    JobStatusData:
      type: object
      properties:
        data:
          type: object
          properties:
            id:
              type: string
              example: "08cd3816-6f0b-498a-9fae-99439f756cdb"
            orgId:
              type: string
              example: "121431"
            user:
              type: string
              example: "amanchopra"
            status:
              type: string
              example: "completed"
            jobNumber:
              type: integer
              example: "5644"
            jobLabel:
              type: string
              example:
            remark:
              type: string
              example:
            createdAt:
              type: string
              example: "2023-01-23T07:48:04Z"
            updateAt:
              type: string
              example: "023-01-23T07:53:18Z"
            globalTimeout:
              type: integer
              example: 150
            testSuiteTimeout:
              type: integer
              example: 150
            retryOnFailure:
              type: boolean
              example: false
            tunnelName:
              type: string
              example: ""
            runson:
              type: string
              example: ""
            startTime:
              type: string
              example: "2023-01-23T07:50:31Z"
            endTime:
              type: string
              example: "2023-01-23T07:53:18Z"
            type:
              type: string
              example: "autosplit"
            tasks:
              type: array
              items:
                properties:
                  id:
                    type: string
                    example: "amanc"
                  os:
                    type: string
                    example: "win"
                  Job:
                    type: string
                    example: "08cd3816-6f0b-498a-9fae-99439f756cdb"
                  context:
                    type: string
                    example: "{\"_jobId\": \"08cd3816-6f0b-498a-9fae-99439f756cdb\", \"_taskId\": \"147b7c8a-325f-46d9-8b52-5b9975d01591\"}"
                  version:
                    type: string
                    example: "10"
                  status:
                    type: string
                    example: "completed"
                  remark:
                    type: string
                    example: "completed"
                  tunnel_name:
                    type: string
                    example: ""
                  createdAt:
                    type: string
                    example: "2023-01-23T07:48:15Z"
                  updateAt:
                    type: string
                    example: "2023-01-23T07:53:18Z"
                  startTime:
                    type: string
                    example: "2023-01-23T07:50:33Z"
                  endTime:
                    type: string
                    example: "2023-01-23T07:53:18Z"
                  groupNumber:
                    type: integer
                    example: 1
                  iteration:
                    type: integer
                    example: 0
                  debug:
                    type: boolean
                    example: false
                  parentTaskId:
                    type: string
                    example: ""
                  failedAt:
                    type: string
                    example:
                  initiatedAt:
                    type: string
                    example:
                  smartUIEnabled:
                    type: boolean
                    example: false
                  type:
                    type: string
                    example: "infra"
                  testIDs:
                    type: string
                    example:
                  sessionIDs:
                    type: string
                    example:
            frameworks:
              type: array
              items:
                type: string
              example:  ["selenium"]
            taskCount:
              type: object
              properties:
                aborted:
                  type: integer
                  example: 0
                cancelled:
                  type: integer
                  example: 0
                completed:
                  type: integer
                  example: 2
                failed:
                  type: integer
                  example: 0
                initiated:
                  type: integer
                  example: 0
                lambdaError:
                  type: integer
                  example: 0
                queued:
                  type: integer
                  example: 0
                running:
                  type: integer
                  example: 0
                skipped:
                  type: integer
                  example: 0
                timeout:
                  type: integer
                  example: 0
                total:
                  type: integer
                  example: 2
            totalTests:
              type: integer
              example: 3
            jobSummary:
              type: object
              properties:
                preStatusCount:
                  type: object
                  properties:
                    created:
                      type: integer
                      example: 0
                    inPorgress:
                      type: integer
                      example: 0
                    failed:
                      type: integer
                      example: 0
                    aborted:
                      type: integer
                      example: 0
                    completed:
                      type: integer
                      example: 6
                    skipped:
                      type: integer
                      example: 0
                    lambdaError:
                      type: integer
                      example: 0
                    timeout:
                      type: integer
                      example: 0
                    cancelled:
                      type: integer
                      example: 0
                    logAvailable:
                      type: integer
                      example: 0
                postStatusCount:
                  type: object
                  properties:
                    created:
                      type: integer
                      example: 0
                    inPorgress:
                      type: integer
                      example: 0
                    failed:
                      type: integer
                      example: 0
                    aborted:
                      type: integer
                      example: 0
                    completed:
                      type: integer
                      example: 4
                    skipped:
                      type: integer
                      example: 0
                    lambdaError:
                      type: integer
                      example: 0
                    timeout:
                      type: integer
                      example: 0
                    cancelled:
                      type: integer
                      example: 0
                    logAvailable:
                      type: integer
                      example: 0
                scenarioStageSummary:
                  type: object
                  properties:
                    totalExcludingRetries:
                      type: integer
                      example: 2
                    totalExecutionTimeIncludingRetriesInSec:
                      type: integer
                      example: 125
                    retries:
                      type: integer
                      example: 0
                    totalRetriesTimeInSec:
                      type: integer
                      example: 0
                    status_counts_excluding_retries:
                      type: object
                      properties:
                        created:
                          type: integer
                          example: 0
                        inPorgress:
                          type: integer
                          example: 0
                        failed:
                          type: integer
                          example: 0
                        aborted:
                          type: integer
                          example: 0
                        completed:
                          type: integer
                          example: 4
                        skipped:
                          type: integer
                          example: 0
                        lambdaError:
                          type: integer
                          example: 0
                        timeout:
                          type: integer
                          example: 0
                        cancelled:
                          type: integer
                          example: 0
                        logAvailable:
                          type: integer
                          example: 0
            screenRecordingForScenarios:
              type: boolean
              example: false
            testType:
              type: string
              example: ""
        executionTime:
          type: string
          example: "1m41s"
        metadata:
          type: object
          properties:
            total:
              type: integer
              example: 2
            cursor:
              type: integer
              example: 0
            hasmore:
              type: boolean
              example: false
        status:
          type: string
          example: "success"
          
    JobScenarioData:
      type: object
      properties:
        data:
          type: array
          items:
            properties:
              id:
                type: string
                example: "00x0x0xx-x0x0-0000-0000-00xx0x000x00"
              taskID:
                type: string
                example: "00xx000-0x0x-000x-0xxx-00000x000xxx"
              name:
                type: string
                example: "aliasing.spec.js"
              iteration:
                type: integer
                example: 0
              status:
                type: string
                example: "completed"
              group_number:
                type: integer
                example: 2
              duration:
                type: string
                example: "00:00:23"
        metadata:
          type: object
          properties:
            total:
              type: integer
              example: 1
            cursor:
              type: string
              example: ""
            hasmore:
              type: boolean
              example: false
        status:
          type: string
          example: "success"                    
             
    JobSessionData:
      type: object
      properties:
        data:
          type: array
          items:
            properties:
              sessionID:
                type: string
                example: "XXXX-XXXX-XXXX-XXXX"
              testID:
                type: string
                example: "XXXX-XXXX-XXXX-XXXX"
              taskID:
                type: string
                example: "00xx000-0x0x-000x-0xxx-00000x000xxx"
              name:
                type: string
                example: "aliasing.spec.js"
              scenario_name:
                type: string
                example: "aliasing.spec.js"
              status:
                type: string
                example: "passed"
              group_number:
                type: integer
                example: 2
              duration:
                type: string
                example: "00:00:16"
              smartUI_enabled:
                type: boolean
                example: false
        metadata:
          type: object
          properties:
            total:
              type: integer
              example: 1
            cursor:
              type: string
              example: ""
            hasmore:
              type: boolean
              example: false
        status:
          type: string
          example: "success"                    
          
    JobList:
      type: object
      properties:
        data:
          type: array
          items:
            type: object
            properties:
              id:
                type: string
                example: "f3e41-42e9-8095-e7cc3f46"
              org_id:
                type: string
                example: "509662"
              status:
                type: string
                example: "aborted"
              job_number:
                type: integer
                example: 16311
              job_label:
                type: string
                example: ""
              remark:
                type: string
                example: "job has been aborted by user"
              created_at:
                type: string
                example: "2024-11-20T08:54:13Z"
              update_at:
                type: string
                example: "2024-11-20T08:54:23Z"
              global_timeout:
                type: integer
                example: 0
              test_suite_timeout:
                type: integer
                example: 0
              retry_on_failure:
                type: boolean
                example: "false"
              tunnel_name:
                type: string
                example: ""
              runson:
                type: string
                example: ""
              start_time:
                type: string
                example: null
              end_time:
                type: string
                example: "2024-11-20T08:54:23Z"
              type:
                type: string
                example: ""
              user:
                type: string
                example: "amanc"
              Tasks:
                type: integer
                example: 0
              taskCount:
                type: integer
                example: null
              archived_at:
                type: string
                example: null
              archived_by:
                type: string
                example: ""
              unarchived_at:
                type: string
                example: null
              unarchived_by:
                type: string
                example: ""
              is_archived:
                type: integer
                example: 0
              executionTime:
                type: string
                example: "0s"
              execution_time_sec:
                type: integer
                example: 0
              total_tests:
                type: integer
                example: 0
              job_summary:
                type: string
                example: null
              project_id:
                type: string
                example: ""
              test_type:
                type: string
                example: ""
              workflow_details:
                type: object
                properties:
                  workflow_id:
                    type: string
                    example: null
              project_name:
                type: string
                example: ""
        metadata:
          type: object
          properties:
            total:
              type: integer
              example: 0
            cursor:
              type: integer
              example: 16310
            hasmore:
              type: boolean
              example: "true"
            
        status:
          type: string
          example: "success"
          
          
    
    StageListScenarioResponseFalse:
      type: object
      properties:
        data:
          type: object
          properties:
            pre:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: string
                    example: "af2ab1dc-55de-4057-9789-d414c2c23fcb"
                  task:
                    type: string
                    example: "085d201b-0fc8-4985-a822-0ef3c46839f3"
                  type:
                    type: string
                    example: "cache-download"
                  status:
                    type: string
                    example: "completed"
                  remark:
                    type: string
                    example: "completed"
                  name:
                    type: string
                    example: "cache-download"
                  iteration:
                    type: integer
                    example: 0
                  order:
                    type: integer
                    example: 1
                  link:
                    type: string
                    example: "cache-download.log"
                  createdAt:
                    type: string
                    example: "2023-01-23T07:50:33Z"
                  startedAt:
                    type: string
                    example: "2023-01-23T07:50:35Z"
                  updatedAt:
                    type: string
                    example: "2023-01-23T07:50:39Z"
                  count:
                    type: integer
                    example: 0
                  testType:
                    type: string
                    example: 
            scenario:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: string
                    example: "d7b0255e-f469-4e6f-8252-0ac0d95ef958"
                  task:
                    type: string
                    example: "085d201b-0fc8-4985-a822-0ef3c46839f3"
                  type:
                    type: string
                    example: "scenario"
                  status:
                    type: string
                    example: "completed"
                  remark:
                    type: string
                    example: "completed"
                  name:
                    type: string
                    example: "\"Test_1\""
                  iteration:
                    type: integer
                    example: 0
                  order:
                    type: integer
                    example: 4
                  link:
                    type: string
                    example: "command.1.0.log"
                  createdAt:
                    type: string
                    example: "2023-01-23T07:51:04Z"
                  startedAt:
                    type: string
                    example: "2023-01-23T07:51:06Z"
                  updatedAt:
                    type: string
                    example: "2023-01-23T07:52:30Z"
                  count:
                    type: integer
                    example: 0
                  testType:
                    type: string
                    example: 
            post:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: string
                    example: "2a9d14a4-fab8-49cb-88cd-0c0a6d22c13c"
                  task:
                    type: string
                    example: "085d201b-0fc8-4985-a822-0ef3c46839f3"
                  type:
                    type: string
                    example: "postrun"
                  status:
                    type: string
                    example: "completed"
                  remark:
                    type: string
                    example: "completed"
                  name:
                    type: string
                    example: "post"
                  iteration:
                    type: integer
                    example: 0
                  order:
                    type: integer
                    example: 5
                  link:
                    type: string
                    example: "post.log"
                  createdAt:
                    type: string
                    example: "2023-01-23T07:51:04Z"
                  startedAt:
                    type: string
                    example: "2023-01-23T07:52:32Z"
                  updatedAt:
                    type: string
                    example: "2023-01-23T07:52:34Z"
                  count:
                    type: integer
                    example: 0
                  testType:
                    type: string
                    example: 
        status:
          type: string
          example: "success"
    
    StageListScenarioResponseTrue:
      type: object
      properties:
        data:
          type: object
          properties:
            scenario:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: string
                    example: "d7b0255e-f469-4e6f-8252-0ac0d95ef958"
                  task:
                    type: string
                    example: "085d201b-0fc8-4985-a822-0ef3c46839f3"
                  type:
                    type: string
                    example: "scenario"
                  status:
                    type: string
                    example: "completed"
                  remark:
                    type: string
                    example: "completed"
                  name:
                    type: string
                    example: "\"Test_1\""
                  iteration:
                    type: integer
                    example: 0
                  order:
                    type: integer
                    example: 4
                  link:
                    type: string
                    example: "command.1.0.log"
                  createdAt:
                    type: string
                    example: "2023-01-23T07:51:04Z"
                  startedAt:
                    type: string
                    example: "2023-01-23T07:51:06Z"
                  updatedAt:
                    type: string
                    example: "2023-01-23T07:52:30Z"
                  count:
                    type: integer
                    example: 0
                  testType:
                    type: string
                    example: 
        status:
          type: string
          example: "success"
    
    StageTest:
      type: object
      properties:
        data:
          type: array
          items:
            type: string
          example:  ["D9HTK-NNIT3-STSWP-SNYWK"]
        status:
          type: string
          example: "success"
    
    BrowserList:
      type: object
      properties:
        message: 
          example: ""
        platforms:
          type: object
          properties:
            desktop:
              type: array
              items:
                $ref: '#/components/schemas/BorwserListProperties'
        status:
          type: integer
          example: 200
    SuccessStageLogs:
      type: object
      properties:
        data:
          type: string
          items:
            type: string
          example: "https://hypertestproduction.blob.core.windows.net/task-logs/60d-a9e7-a4be-637a3/cache-download.log?rscd=attachment%3B+filename%3cc8-a9ea-4ae7-a4be-d182981637a3%2Fcache-download.log&se=2024-10-23T14%Qs9%3D&ske=2024-10-24T12%3A29&skoid=1f80-df57-295e&sks=b&skt=2024-10-39Z&sktid=b4968-80ca8c130456&skv=2020-10-02&sp=rl&spr=https&sr=c&st=2024-10-23T10%3A24%3A29Z&sv=2020-02-10"
    FailedStageLogs:
      properties:
        error:
          type: string
          items:
            type: string
          example: "non-20x status code 500"
        status:
          type: string
          items:
            type: string
          example: "failed"
    BorwserListProperties:
       type: object
       properties:
          platform:
            type: string
            example: "Windows 10"
          browsers:
            type: array
            items:
              $ref: '#/components/schemas/BrowserName'
          resolutions:
            type: array
            items:
              type: string
            example:  ["1024x768", "1280x800", "1280x1024", "1366x768"]
    
    BrowserName:
      type: object
      properties:
        name:
          type: string
          example: Firefox
        version:
          type: string
          example: "99.0"   
    
    ArtifactList:
      type: object
      properties:
        data:
          type: array
          items:
            $ref: '#/components/schemas/ArtifactListData'
        status:
          type: string
          example: "success"
    
    ArtifactListData:
      type: array
      items:
        type: object
        properties:
          id:
            type: string
            example: "56bbe571-221a-4938-967c-2aabe5cdd379"
          name:
            type: string
            example: Final-Report-2
          job:
            type: string
            example: "d711f5eb-d629-48d1-9ebf-99cf7f3fa2f4"
          removed:
            type: boolean
            example: false
          link:
            type: string
            example:
          size:
            type: string
            example: "159195"
          remark:
            type: string
            example: "foreman"
          status:
            type: string
            example: completed
          createdAt:
            type: string
            example: "2022-11-11T08:04:13Z"
          expiry:
            type: string
            example: "2022-12-11T08:04:13Z"
          updatedAt:
            type: string
            example: "2022-11-11T08:07:30Z"
          removedAt:
            type: string
            example:
        
    JobRCA:
      type: object
      properties:
        data:
          type: array
          items:
            type: object
            properties:
              additional_suggestions:
                type: string
                example: ""
              after:
                type: string
                example: "\n            Thread.sleep(500);\n            test1.log(LogStatus.PASS,  ..."
              before:
                type: string
                example: "\n\n        WebElement temp_element;\n\n        int totalCount = item_count+5;\n ..."
              created_at:
                type: string
                example: "2024-10-03T17:50:23Z"
              error:
                type: string
                example: "[ERROR] Tests run: 2, Failures: 2, Errors: 0, Skipped: 0, ..."
              errorType:
                type: string
                example: ElementNotFoundError
              filename:
                type: string
                example: "Test1.java"
              id:
                type: string
                example: "01J99R26XDH1ZVBK4R3ZY29F70"
              iteration:
                type: integer
                example: 0
              lang:
                type: string
                example: "Java"
              lineNumber:
                type: integer
                example: 88
              order:
                type: integer
                example: 4
              patch_diff:
                type: string
                example: ""
              rca:
                type: string
                example: ""
              remediation:
                type: integer
                example: ""
              stack_trace_blob_path:
                type: string
                example: "logs/d2698ea8-39bf-4580-aea8-ad625bec1f70/command.1.0/1.log"
              stacktraceFileLink:
                type: string
                example: ""
              stageDetails:
                type: object
                properties:
                  createdAt:
                    type: string
                    example: "0001-01-01T00:00:00Z"
                  updatedAt:
                    type: string
                    example: "0001-01-01T00:00:00Z"
              taskId:
                type: string
                example: "d2698ea0-aea8-ad625bec1f70"
              updated_at:
                type: string
                example: "2024-10-03T17:50:23Z"
        metadata:
          type: object
          properties:
            cursor:
              type: string
              example: ""
            hasmore:
              type: boolean
              example: "false"
            next_cursor:
              type: string
              example: ""
            
        status:
          type: string
          example: "success"
    
    
    AbortJob:
      type: object
      properties:
        status:
          type: string
          example: "success"
    
    CreateSecret:
      type: object
      required:
        - secretKey
      properties:
        secretKey:
          type: string
          example: "Test-Secret"
        secretValue:
          type: string
          example: "TestSecretValue"
        username:
          type: string
          example: "<YOUR_LAMBDATEST_USERNAME>"
        orgID:
          type: string
          example: "<YOUR_LAMBDATEST_ORG_ID>"

    SecretCreatedSuccessfully:
        type: object
        properties:
          message:
            type: string
            example: "Secret created successfully"
          status:
            type: string
            example: "success"
    
    SecretList:
      type: object
      properties:
        data:
          type: array
          items:
            example: "TestSecret"
        status:
          type: string
          example: "success"
          
    DeleteSecret:
      type: object
      required:
        - secretKey
      properties:
        secretKey:
          type: string
          example: "Test-Secret"
        username:
          type: string
          example: "<YOUR_LAMBDATEST_USERNAME>"
        orgID:
          type: string
          example: "<YOUR_LAMBDATEST_ORG_ID>"
    
    DeleteSecretSuccessfully:
      type: object
      properties:
        message:
          type: string
          example: "Secret deleted successfully"
        status:
          type: string
          example: "success"
  
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```

---


## 9. Accessibility Testing

**File:** `accessibility-testing.yaml` | **Size:** 8661 bytes | **Lines:** 237

```yaml
openapi: 3.0.0
info:
  title: TestMu AI Accessibility Testing API Documentation
  version: 1.0.0
servers:
  - url: 'https://api.lambdatest.com/accessibility'
  - url: 'https://eu-api.lambdatest.com/accessibility'
components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
paths:
  /api/v1/test-issue/{testId}:
    get:
      tags:
        - default
      summary: Get Test Issue Data
      description: >-
        This endpoint retrieves accessibility test issues based on the provided
        test ID with filters such as impact, best practice and needs review parameters in the query string.


        ### Request


        - Method: GET

        - Path Parameter:

            - testId (string): Test ID of the accessibility test.

        - Query Parameters:
                
            - impact (string): [minor, moderate, critical and serious].
                
            - bestPractice (boolean)
                
            - needsReview (boolean)
              
      security:
        - basicAuth: []
      parameters:
        - name: testId
          in: path
          required: true
          schema:
            type: string
          example: LAT-0LO26CZII1HQOO42TCFYY
        - name: impact
          in: query
          schema:
            type: string
          example: serious
        - name: bestPractice
          in: query
          schema:
            type: boolean
          example: 'false'
        - name: needsReview
          in: query
          schema:
            type: boolean
          example: 'true'
      responses:
        '200':
          description: OK
          headers:
            Date:
              schema:
                type: string
                example: Fri, 06 Sep 2024 12:04:48 GMT
            Content-Type:
              schema:
                type: string
                example: application/json; charset=utf-8
            Server:
              schema:
                type: string
                example: nginx
            Access-Control-Allow-Origin:
              schema:
                type: string
                example: '*'
            Access-Control-Allow-Methods:
              schema:
                type: string
                example: GET, POST, PUT, OPTIONS
            Access-Control-Allow-Headers:
              schema:
                type: string
                example: >-
                  Pragma,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range,Authorization,username,traceparent,tracestate
            Access-Control-Expose-Headers:
              schema:
                type: string
                example: >-
                  Pragma,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range
          content:
            application/json:
              schema:
                type: object
              example:
                test_info:
                  total_issues: 18
                  critical_issues: 4
                  minor_issues: 1
                  moderate_issues: 9
                  serious_issues: 4
                  test_id: LAT-0LO26CZII1HQOO42TCFYY
                  scan_type: workflow
                  org_id: 33464884
                  status: completed
                  user_id: 1000137129
                  test_name: Workflow Scan | 1725000152130
                  created_at: '2024-08-30T06:42:33Z'
                  active: true
                  updated_at: '2024-08-30T06:42:33Z'
                  username: amanraj
                  email: amanraj@lambdatest.com
                  test_type: manual
                scan_json:
                  - test_id: LAT-0LO26CZII1HQOO42TCFYY
                    url: https://www.google.com/
                    issue_count: 8
                    scan_id: BZLZFQLT
                    accessibility_score: 98
                    standard: wcag21aa
                    startDate: '2024-08-30T06:43:14.462Z'
                    current_timestamp: 1725000194
                    scanType: workflow
                    axeVersion: 4.9.1
                    extensionVersion: 1.1.1
                    bestPracticesEnabled: true
                    needsReviewEnabled: true
                    allIssues:
                      - bestPractice: false
                        class: ''
                        description: >-
                          Ensure each page has at least one mechanism for a user
                          to bypass navigation and jump straight to the content
                        failureSummary: |-
                          Fix any of the following:
                            No valid skip link found
                            Page does not have a heading
                            Page does not have a landmark region
                        helpUrl: >-
                          https://dequeuniversity.com/rules/axe/4.10/bypass?application=axeAPI
                        html: >-
                          PGh0bWwgaXRlbXNjb3BlPSIiIGl0ZW10eXBlPSJodHRwOi8vc2NoZW1hLm9yZy9XZWJQYWdlIiBsYW5nPSJlbi1JTiI+
                        htmlTagName: html
                        id: bypass
                        impact: serious
                        issueId: VqHh3wClrw
                        name: Page must have means to bypass repeated blocks
                        needsReview: true
                        target: html
                        url: https://www.google.com/
                        wcagGuideline: WCAG 2.0
                        wcagVersion:
                          - 2.4.1
                        xpath: /html
                    failedRules:
                      - count: 1
                        mode: automated
                        name: aria-allowed-role
                      - count: 1
                        mode: automated
                        name: landmark-one-main
                      - count: 1
                        mode: automated
                        name: page-has-heading-one
                      - count: 1
                        mode: automated
                        name: region
                      - count: 1
                        mode: automated
                        name: aria-valid-attr-value
                      - count: 1
                        mode: automated
                        name: bypass
                    issueSummary:
                      bestPractices: 6
                      critical: 1
                      minor: 1
                      moderate: 5
                      needsReview: 2
                      serious: 1
                    needsReview:
                      - count: 1
                        mode: automated
                        name: aria-valid-attr-value
                      - count: 1
                        mode: automated
                        name: bypass
                    source:
                      productName: LambdaTest Accessibility DevTools
                      productVersion: 1.1.1
                  - test_id: LAT-0LO26CZII1HQOO42TCFYY
                    url: https://w3school.com/
                    issue_count: 10
                    scan_id: IA9EKXIE
                    accessibility_score: 99
                    standard: wcag21aa
                    startDate: '2024-08-30T06:43:14.462Z'
                    current_timestamp: 1725000194
                    scanType: workflow
                    axeVersion: 4.9.1
                    extensionVersion: 1.1.1
                    bestPracticesEnabled: true
                    needsReviewEnabled: true
                    failedRules:
                      - count: 1
                        mode: automated
                        name: image-alt
                      - count: 1
                        mode: automated
                        name: landmark-one-main
                      - count: 1
                        mode: automated
                        name: link-name
                      - count: 1
                        mode: automated
                        name: page-has-heading-one
                      - count: 1
                        mode: automated
                        name: region
                    issueSummary:
                      bestPractices: 4
                      critical: 3
                      minor: 0
                      moderate: 4
                      needsReview: 0
                      serious: 3
                    source:
                      productName: LambdaTest Accessibility DevTools
                      productVersion: 1.1.1
```

---


## 10. Analytics

**File:** `analytics.yaml` | **Size:** 96155 bytes | **Lines:** 2458

```yaml
openapi: 3.0.0
info:
  title: TestMu AI Analytics API Documentation
  version: 1.0.0
servers:
  - url: 'https://api.lambdatest.com/insights/api/v3/public'
  - url: 'https://eu-api.lambdatest.com/insights/api/v3/public'
components:
  securitySchemes:
    BasicAuth:
      type: http
      scheme: basic
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
  schemas:
    ErrorResponse:
      type: object
      properties:
        error:
          type: string
          description: Error message describing what went wrong.
        status:
          type: string
          example: "failed"
    MessageResponse:
      type: object
      properties:
        message:
          type: string
          description: Message describing what went wrong.
    RCAResponse:
      type: object
      properties:
        status:
          type: string
          example: "success"
        data:
          type: array
          items:
            type: object
            properties:
              test_id:
                type: string
                description: Unique identifier for the test execution.
              job_id:
                type: string
                description: HyperExecute job ID the test ran under.
              stage_id:
                type: string
                description: HyperExecute stage ID within the job.
              task_id:
                type: string
                description: HyperExecute task ID within the stage.
              build_id:
                type: string
                description: Build ID the test belongs to.
              rca_category:
                type: string
                description: High-level category of the root cause (e.g. "Test Data Issue", "Infrastructure Issue").
              create_timestamp:
                type: string
                format: date-time
                description: Timestamp when the test execution was created (RFC3339 UTC).
              rca_detail:
                type: object
                description: Detailed AI-powered Root Cause Analysis.
                properties:
                  root_cause_category:
                    type: string
                    description: Granular root cause category identified by AI analysis.
                  parent_failure_category:
                    type: string
                    description: Broader parent category grouping the root cause (e.g. "Infrastructure Issue" is the parent of "Network Timeout").
                  failure_summary:
                    type: string
                    description: Human-readable summary of why the test failed.
                  stack_trace:
                    type: string
                    description: Stack trace from the failing test assertion or exception.
                  root_cause_failure_stack_trace:
                    type: string
                    description: Stack trace from the underlying root cause (may differ from the test-level stack_trace when the failure propagated from a deeper layer).
                  analysis:
                    type: array
                    items:
                      type: string
                    description: Step-by-step AI analysis of the failure chain.
                  steps_to_fix:
                    type: array
                    description: Actionable fix suggestions generated by AI.
                    items:
                      type: object
                      properties:
                        issue:
                          type: string
                          description: The specific issue identified.
                        module:
                          type: string
                          description: The code module or component where the issue was found.
                        suggested_fix:
                          type: string
                          description: Recommended fix for this issue.
                  error_timeline:
                    type: array
                    description: Chronological sequence of events leading to the failure.
                    items:
                      type: object
                      properties:
                        step_name:
                          type: string
                          description: Name of the step or action in the timeline.
                        timestamp:
                          type: string
                          format: date-time
                          description: When this event occurred (RFC3339 UTC).
                        source_log:
                          type: string
                          description: Log source (e.g. "Device Logs", "Appium Logs").
                        summary:
                          type: string
                          description: Brief description of what happened at this step.
        pagination:
          type: object
          properties:
            page:
              type: integer
            limit:
              type: integer
            total:
              type: integer
    StatusErrorResponse:
      type: object
      description: Error response shape returned by the RCA generate/status endpoints.
      properties:
        status:
          type: string
          example: "error"
        message:
          type: string
          description: Human-readable error message.
    GenerateRCARequest:
      type: object
      description: >-
        Request body for POST /rca/generate. At least one scope field must be
        provided. Each array is capped at 100 IDs.
      anyOf:
        - required: [job_ids]
        - required: [stage_ids]
        - required: [task_ids]
        - required: [test_ids]
      properties:
        job_ids:
          type: array
          items:
            type: string
          maxItems: 100
          description: HyperExecute job IDs whose failed tests should be analysed.
        stage_ids:
          type: array
          items:
            type: string
          maxItems: 100
          description: HyperExecute stage IDs whose failed tests should be analysed.
        task_ids:
          type: array
          items:
            type: string
          maxItems: 100
          description: HyperExecute task IDs whose failed tests should be analysed.
        test_ids:
          type: array
          items:
            type: string
          maxItems: 100
          description: >-
            Test execution IDs to analyse directly. Supports HyperExecute and
            Web/Mobile automation tests — each test is routed to the correct
            analyzer based on its stored product/test_type.
    GenerateRCAResponse:
      type: object
      properties:
        status:
          type: string
          example: "success"
        data:
          type: object
          properties:
            total_tests:
              type: integer
              description: Total failed tests resolved from the provided scope.
            triggered_count:
              type: integer
              description: Number of tests newly dispatched to the RCA pipeline.
            skipped_count:
              type: integer
              description: Sum of skipped_already_generated + skipped_in_progress.
            skipped_already_generated:
              type: integer
              description: Tests skipped because an RCA was generated earlier.
            skipped_in_progress:
              type: integer
              description: Tests skipped because RCA generation is already running.
            credits_estimated:
              type: number
              format: float
              description: Estimated credits that will be consumed by the triggered tests.
            test_ids:
              type: array
              items:
                type: string
              description: Test IDs successfully dispatched for RCA generation.
            skipped_test_ids:
              type: array
              items:
                type: string
              description: Test IDs that were skipped (already generated or in progress).
            message:
              type: string
              description: >-
                Informational message. Present when no failed tests were
                resolved from the scope.
    InsufficientCreditsResponse:
      type: object
      description: 402 response returned when the organization does not have enough credits to cover the request.
      properties:
        status:
          type: string
          example: "error"
        message:
          type: string
        data:
          type: object
          properties:
            total_tests:
              type: integer
              description: Total failed tests resolved from the scope.
            tests_to_trigger:
              type: integer
              description: Tests that would be triggered after filtering duplicates and in-progress runs.
            credits_required:
              type: number
              format: float
              description: Credits needed to dispatch all pending tests.
            credits_available:
              type: number
              format: float
              description: Current credit balance for the organization.
    RCAStatusResponse:
      type: object
      properties:
        status:
          type: string
          example: "success"
        data:
          type: object
          properties:
            progress:
              type: object
              description: Aggregated RCA progress counts across all tests in the scope.
              properties:
                total_tests:
                  type: integer
                completed:
                  type: integer
                  description: Tests whose RCA generation finished successfully.
                in_progress:
                  type: integer
                  description: Tests whose RCA is currently running.
                failed:
                  type: integer
                  description: Tests whose RCA generation failed.
                pending:
                  type: integer
                  description: Tests that have not been triggered yet.
            results:
              type: array
              description: >-
                Page of completed RCA records (controlled by limit/offset). The
                record count aligns with `progress.completed` — in-progress,
                failed and pending tests are represented only in `progress`,
                not here.
              items:
                type: object
                properties:
                  test_id:
                    type: string
                  stage_id:
                    type: string
                    description: HyperExecute stage ID. Empty for non-HyperExecute tests.
                  task_id:
                    type: string
                    description: HyperExecute task ID. Empty for non-HyperExecute tests.
                  job_id:
                    type: string
                    description: HyperExecute job ID. Empty for non-HyperExecute tests.
                  rca_category:
                    type: string
                    description: Canonical root cause category.
                  parent_failure_category:
                    type: string
                    description: Broader parent category grouping the root cause.
                  status:
                    type: string
                    enum: [active]
                    description: >-
                      Internal status label of the completed RCA record.
                      Currently always `active` for records in this list.
                  created_at:
                    type: string
                    format: date-time
                    description: Timestamp when the RCA record was created.
                  rca_detail:
                    type: object
                    description: >-
                      Full RCA payload. Present only when the request was made
                      with `include_detail=true`.
                    properties:
                      root_cause_category:
                        type: string
                      parent_failure_category:
                        type: string
                      failure_summary:
                        type: string
                      stack_trace:
                        type: string
                      root_cause_failure_stack_trace:
                        type: string
                      analysis:
                        type: array
                        items:
                          type: string
                      steps_to_fix:
                        type: array
                        items:
                          type: object
                          properties:
                            issue:
                              type: string
                            module:
                              type: string
                            suggested_fix:
                              type: string
                      error_timeline:
                        type: array
                        items:
                          type: object
                          properties:
                            step_name:
                              type: string
                            timestamp:
                              type: string
                              format: date-time
                            source_log:
                              type: string
                            summary:
                              type: string
            pagination:
              type: object
              properties:
                total:
                  type: integer
                  description: Total completed RCA records matching the scope.
                limit:
                  type: integer
                offset:
                  type: integer
    TestDataResponse:
      type: object
      description: Response for GET /tests.
      properties:
        status:
          type: string
          example: "success"
        data:
          type: array
          description: Array of test execution records. Empty array if no results match.
          items:
            type: object
            properties:
              test_id:
                type: string
                description: Unique identifier for the test execution.
                example: "RMAA-AND-160849-XXXX"
              env_config:
                type: object
                description: Device and browser configuration the test ran on.
                properties:
                  os:
                    type: string
                    description: Operating system (e.g. "Android", "Windows", "macOS").
                  os_version:
                    type: string
                    description: OS version (e.g. "13", "11").
                  browser:
                    type: string
                    description: Browser name. Empty for app-based tests.
                  browser_version:
                    type: string
                    description: Browser version. Empty for app-based tests.
                  device:
                    type: string
                    description: Device name for mobile tests (e.g. "Galaxy S23"). Empty for desktop.
                  resolution:
                    type: string
                    description: Screen resolution (e.g. "1920x1080"). Empty for mobile tests.
              test_metadata:
                type: object
                properties:
                  test_name:
                    type: string
                    description: Name of the test as defined in the test suite.
                  status:
                    type: string
                    description: Final status (passed, failed, skipped, error).
                  duration:
                    type: number
                    format: float
                    description: Duration in seconds.
                  create_timestamp:
                    type: string
                    format: date-time
                    description: Timestamp when the test record was created (RFC3339 UTC).
                  start_timestamp:
                    type: string
                    format: date-time
                    description: Timestamp when test execution started (RFC3339 UTC).
                  end_timestamp:
                    type: string
                    format: date-time
                    description: Timestamp when test execution ended (RFC3339 UTC).
                  tags:
                    type: array
                    items:
                      type: string
                    description: User-defined labels applied to this test execution.
              build_metadata:
                type: object
                description: Build and job context the test ran under.
                properties:
                  build_id:
                    type: string
                    description: Unique identifier for the build.
                  build_name:
                    type: string
                    description: Human-readable name of the build (e.g. "Regression Suite - March Sprint").
                  build_tags:
                    type: array
                    items:
                      type: string
                    description: Tags applied to the build (e.g. ["regression", "nightly"]).
                  build_create_timestamp:
                    type: string
                    format: date-time
                    description: Timestamp when the build was created (RFC3339 UTC).
                  job_id:
                    type: string
                    description: HyperExecute job ID. Empty for non-HyperExecute tests.
                  task_id:
                    type: string
                    description: HyperExecute task ID within the job. Empty for non-HyperExecute tests.
                  stage_id:
                    type: string
                    description: HyperExecute stage ID within the task. Empty for non-HyperExecute tests.
              insights:
                type: object
                properties:
                  smart_tags:
                    type: object
                    description: AI-detected quality signals for this test.
                    properties:
                      is_always_failing:
                        type: boolean
                        description: True if the test has failed consistently across recent runs.
                      is_new_failure:
                        type: boolean
                        description: True if this is the first failure after a streak of passing runs.
                      is_flaky:
                        type: boolean
                        description: True if the test alternates between pass and fail without code changes.
                      is_performance_anomaly:
                        type: boolean
                        description: True if the test duration is significantly higher than its historical baseline.
                  flakiness:
                    type: object
                    properties:
                      is_flaky:
                        type: boolean
                        description: True if the test was detected as flaky based on historical runs.
                      flake_rate:
                        type: number
                        format: float
                        description: Ratio of flaky runs to total runs (0.0–1.0).
                      compared_test_ids:
                        type: array
                        items:
                          type: string
                        description: IDs of test runs used to determine flakiness for this execution.
                  rca:
                    type: object
                    nullable: true
                    description: Minimal RCA info present only when AI analysis has run. Use GET /rca for the full analysis including stack traces and step-by-step breakdown.
                    properties:
                      category:
                        type: string
                        description: AI-generated root cause category (e.g. "Test Data Issue", "Infrastructure Issue").
                      summary:
                        type: string
                        description: One-line AI summary of the failure reason.
                  failure_category:
                    type: string
                    description: >-
                      Stored failure category for this test execution. Sourced
                      directly from the test record — set when the test is
                      processed. May match `rca.category` when AI analysis is
                      present, but is independently stored and can be non-null
                      even when `rca` is null.
        pagination:
          type: object
          properties:
            next_cursor:
              type: string
              description: Base64-encoded cursor for the next page. Empty when no more results.
            has_more:
              type: boolean
            limit:
              type: integer
        notes:
          type: array
          items:
            type: string
          description: Informational messages (e.g., limit clamping). Omitted when empty.
    ConcurrencyResponse:
      type: object
      description: Response for GET /concurrency.
      properties:
        status:
          type: string
          example: "success"
        data:
          type: array
          description: Array of time-bucketed concurrency metrics. Empty if no data exists.
          items:
            type: object
            properties:
              timestamp:
                type: string
                format: date-time
                description: Start of the time bucket (RFC3339 UTC).
              product:
                type: string
              max_concurrency:
                type: integer
                description: Maximum concurrent sessions observed in this bucket.
              max_queued:
                type: integer
                description: Maximum queued sessions observed in this bucket.
              max_allowed_concurrency:
                type: integer
                description: Maximum concurrency limit configured for the organization.
              max_queued_limit:
                type: integer
                description: Maximum queue depth configured for the organization.
        metadata:
          type: object
          properties:
            granularity:
              type: string
              description: Time bucket size used for aggregation.
            product:
              type: string
              description: Product name echoed from the request.
            total_buckets:
              type: integer
              description: Total number of time buckets returned in the data array.
            date_range:
              type: object
              properties:
                start:
                  type: string
                  format: date-time
                end:
                  type: string
                  format: date-time
    UsageSummaryResponse:
      type: object
      description: Response for GET /usage-report/summary.
      properties:
        status:
          type: string
          example: "success"
        data:
          type: object
          properties:
            metadata:
              type: object
              required:
                - from
                - to
              properties:
                type:
                  type: string
                  description: User population echoed from the request.
                  enum: [account-user, service-user]
                  example: "account-user"
                totalUsers:
                  type: integer
                  description: >-
                    Distinct users (in the requested type) who ran tests in
                    the date range across all products.
                  example: 12
                from:
                  type: string
                  description: The `from` value as provided in the request.
                  example: "2026-06-23 00:00:00"
                to:
                  type: string
                  description: The `to` value as provided in the request.
                  example: "2026-06-23 23:59:59"
                timezone:
                  type: string
                  description: Resolved timezone offset used to interpret from/to.
                  example: "+05:30"
                organization:
                  type: object
                  description: The authenticated caller's organization.
                  properties:
                    id:
                      type: string
                      description: Numeric organization ID.
                      example: "12345"
                    name:
                      type: string
                      description: Organization display name.
                      example: "Acme Corp"
                partial:
                  type: boolean
                  description: >-
                    Present and true when one or more product data fetches
                    failed. Treat as incomplete — not a real zero.
            products:
              type: object
              description: >-
                Per-product usage totals. Most products carry
                `{ totalTests, totalDuration }`; the `smartui` key carries
                `{ totalScreenshots }` only (no tests or duration).
              properties:
                automation:
                  type: object
                  description: >-
                    Aggregate counters for a non-Smart UI product. Unit of
                    count is a test execution; unit of duration is milliseconds.
                  properties:
                    totalTests:
                      type: integer
                      format: int64
                      description: Total tests run across all users in the date range.
                      example: 8450
                    totalDuration:
                      type: integer
                      format: int64
                      description: Total test execution time in milliseconds.
                      example: 312540
                app-automation:
                  type: object
                  description: >-
                    Aggregate counters for a non-Smart UI product. Unit of
                    count is a test execution; unit of duration is milliseconds.
                  properties:
                    totalTests:
                      type: integer
                      format: int64
                      description: Total tests run across all users in the date range.
                      example: 1200
                    totalDuration:
                      type: integer
                      format: int64
                      description: Total test execution time in milliseconds.
                      example: 98400
                hyperexecute:
                  type: object
                  description: >-
                    Aggregate counters for a non-Smart UI product. Unit of
                    count is a test execution; unit of duration is milliseconds.
                  properties:
                    totalTests:
                      type: integer
                      format: int64
                      description: Total tests run across all users in the date range.
                      example: 3100
                    totalDuration:
                      type: integer
                      format: int64
                      description: Total test execution time in milliseconds.
                      example: 210000
                realtime:
                  type: object
                  description: >-
                    Aggregate counters for a non-Smart UI product. Unit of
                    count is a test execution; unit of duration is milliseconds.
                  properties:
                    totalTests:
                      type: integer
                      format: int64
                      description: Total tests run across all users in the date range.
                      example: 540
                    totalDuration:
                      type: integer
                      format: int64
                      description: Total test execution time in milliseconds.
                      example: 43200
                realdevice:
                  type: object
                  description: >-
                    Aggregate counters for a non-Smart UI product. Unit of
                    count is a test execution; unit of duration is milliseconds.
                  properties:
                    totalTests:
                      type: integer
                      format: int64
                      description: Total tests run across all users in the date range.
                      example: 275
                    totalDuration:
                      type: integer
                      format: int64
                      description: Total test execution time in milliseconds.
                      example: 22000
                smartui:
                  type: object
                  description: >-
                    Aggregate counter for Smart UI. Unit is a compared
                    screenshot — there is no meaningful duration for Smart
                    UI builds.
                  properties:
                    totalScreenshots:
                      type: integer
                      format: int64
                      description: Total screenshots compared via Smart UI in the date range.
                      example: 6800

    UsageDrilldownResponse:
      type: object
      description: >-
        Response for GET /usage-report/drilldown for non-Smart UI products.
        Each user row exposes totalTestsRun and totalDuration.
      properties:
        status:
          type: string
          example: "success"
        data:
          type: object
          properties:
            metadata:
              type: object
              required:
                - from
                - to
              properties:
                type:
                  type: string
                  enum: [account-user, service-user]
                  example: "account-user"
                product:
                  type: string
                  example: "automation"
                totalUsers:
                  type: integer
                  description: >-
                    Distinct users (in the requested type) with usage for
                    this product.
                  example: 8
                totalTests:
                  type: integer
                  format: int64
                  description: >-
                    Org-wide total tests for this product (all users, not
                    just the requested type). Absent when product=smartui.
                  example: 8450
                totalDuration:
                  type: integer
                  format: int64
                  description: >-
                    Org-wide total test duration in milliseconds. Absent when
                    product=smartui.
                  example: 312540
                totalScreenshots:
                  type: integer
                  format: int64
                  description: >-
                    Org-wide total screenshots compared via Smart UI (all
                    users, not just the requested type). Present only when
                    product=smartui; replaces totalTests/totalDuration.
                  example: 6800
                from:
                  type: string
                  example: "2026-06-23 00:00:00"
                to:
                  type: string
                  example: "2026-06-23 23:59:59"
                timezone:
                  type: string
                  example: "+05:30"
                organization:
                  type: object
                  description: The authenticated caller's organization.
                  properties:
                    id:
                      type: string
                      description: Numeric organization ID.
                      example: "12345"
                    name:
                      type: string
                      description: Organization display name.
                      example: "Acme Corp"
                pagination:
                  type: object
                  description: Page window for drilldown results.
                  properties:
                    limit:
                      type: integer
                      description: Results per page.
                      example: 10
                    page:
                      type: integer
                      description: Current page number (1-based).
                      example: 1
                    total:
                      type: integer
                      description: Total number of matching users.
                      example: 8
                    totalPages:
                      type: integer
                      description: Total number of pages (ceil(total / limit)).
                      example: 1
                partial:
                  type: boolean
                  description: >-
                    Present and true when the underlying data fetch failed;
                    the breakdown is empty. Not a real zero.
            users:
              type: array
              description: >-
                Per-user rows, sorted descending by usage. Scoped to the
                requested type population.
              items:
                type: object
                properties:
                  id:
                    type: string
                    description: LambdaTest user account ID.
                    example: "67890"
                  username:
                    type: string
                    example: "johndoe"
                  email:
                    type: string
                    example: "john@example.com"
                  totalTestsRun:
                    type: integer
                    format: int64
                    description: >-
                      Tests run by this user for the product in the date
                      range. Absent when product=smartui.
                    example: 3200
                  totalDuration:
                    type: integer
                    format: int64
                    description: >-
                      Total test execution time in milliseconds for this
                      user. Absent when product=smartui.
                    example: 120000
                  totalScreenshots:
                    type: integer
                    format: int64
                    description: >-
                      Screenshots compared by this user. Present only when
                      product=smartui; replaces totalTestsRun/totalDuration.
                    example: 4200

    UsageSmartUIDrilldownResponse:
      type: object
      description: >-
        Response for GET /usage-report/drilldown when product=smartui.
        Uses totalScreenshots instead of totalTests/totalDuration because
        Smart UI counts compared screenshots, not test executions.
      properties:
        status:
          type: string
          example: "success"
        data:
          type: object
          properties:
            metadata:
              type: object
              required:
                - from
                - to
              properties:
                type:
                  type: string
                  enum: [account-user, service-user]
                  example: "account-user"
                product:
                  type: string
                  example: "smartui"
                totalUsers:
                  type: integer
                  example: 4
                totalScreenshots:
                  type: integer
                  format: int64
                  description: >-
                    Org-wide total screenshots compared via Smart UI (all
                    users, not just the requested type).
                  example: 6800
                from:
                  type: string
                  example: "2026-06-23 00:00:00"
                to:
                  type: string
                  example: "2026-06-23 23:59:59"
                timezone:
                  type: string
                  example: "+05:30"
                organization:
                  type: object
                  description: The authenticated caller's organization.
                  properties:
                    id:
                      type: string
                      description: Numeric organization ID.
                      example: "12345"
                    name:
                      type: string
                      description: Organization display name.
                      example: "Acme Corp"
                pagination:
                  type: object
                  description: Page window for drilldown results.
                  properties:
                    limit:
                      type: integer
                      description: Results per page.
                      example: 10
                    page:
                      type: integer
                      description: Current page number (1-based).
                      example: 1
                    total:
                      type: integer
                      description: Total number of matching users.
                      example: 4
                    totalPages:
                      type: integer
                      description: Total number of pages (ceil(total / limit)).
                      example: 1
                partial:
                  type: boolean
                  description: >-
                    Present and true when the underlying data fetch failed;
                    the breakdown is empty. Not a real zero.
            users:
              type: array
              items:
                type: object
                properties:
                  id:
                    type: string
                    example: "67890"
                  username:
                    type: string
                    example: "johndoe"
                  email:
                    type: string
                    example: "john@example.com"
                  totalScreenshots:
                    type: integer
                    format: int64
                    description: Screenshots compared by this user.
                    example: 4200

tags:
  - name: Test Data
    description: Test execution records with AI-powered insights, flakiness metrics, and RCA category.
  - name: Root Cause Analysis
    description: AI-powered root cause analysis for test failures.
  - name: Concurrency
    description: Time-series concurrency usage metrics per product.
  - name: Usage Report
    description: Org-wide product usage totals and per-user breakdowns. Admin-only.
paths:
  /tests:
    get:
      tags:
        - Test Data
      summary: Get test execution data with AI insights.
      description: >-
        Returns paginated test execution records enriched with AI-powered
        insights including smart tags, flakiness metrics, and root cause
        analysis (RCA) category.


        **Date range**: Defaults to the last 7 days when no timestamps are
        provided. Both `from_timestamp` and `to_timestamp` must be supplied
        together — providing only one returns a 400 error. The maximum allowed
        span per API call is **31 days**.


        **Filters**: At least one filter (`job_ids`, `task_ids`, `stage_ids`,
        `test_ids`, `build_ids`) OR a date range must implicitly scope the
        query. Filters are applied with AND logic when combined. The total
        number of IDs across **all** filter params combined must not exceed
        **100**.


        **Pagination**: Cursor-based via `cursor` + `limit`. Pass the
        `next_cursor` from the previous response as `cursor` in the next
        request.


        **Sorting**: Control result order with `sort_by` and `sort_order`.
        Sortable fields: `create_timestamp` (default), `duration`, `status`.
        Default order is `desc` (newest/largest first).
      operationId: getPublicTests
      parameters:
        - name: from_timestamp
          in: query
          required: false
          description: >-
            Start of the date range in RFC3339 UTC format
            (e.g. `2026-03-01T00:00:00Z`). Must be provided together with
            `to_timestamp` — both must be supplied or both omitted. When
            both are omitted, the range defaults to the last 7 days.
          schema:
            type: string
            format: date-time
          example: "2026-03-01T00:00:00Z"
        - name: to_timestamp
          in: query
          required: false
          description: >-
            End of the date range in RFC3339 UTC format
            (e.g. `2026-03-08T00:00:00Z`). Defaults to the current time when
            both timestamps are omitted. Must be after `from_timestamp`. Cannot
            be more than 1 hour in the future.
          schema:
            type: string
            format: date-time
          example: "2026-03-08T00:00:00Z"
        - name: job_ids
          in: query
          required: false
          description: >-
            Comma-separated list of job IDs to filter by (HyperExecute jobs).
            Maximum 100 IDs total across all filter params. Whitespace around values is trimmed.
          schema:
            type: string
          example: "e3251d99-805a-4b3f-a3f5-c0ea9b1d2e3f,f4362e00-916b-5c40-b4g6-d1fb0c2e3f4g"
        - name: task_ids
          in: query
          required: false
          description: >-
            Comma-separated list of task IDs to filter by (HyperExecute tasks).
            Maximum 100 IDs total across all filter params.
          schema:
            type: string
          example: "task-abc-12345"
        - name: stage_ids
          in: query
          required: false
          description: >-
            Comma-separated list of stage IDs to filter by. Maximum 100 IDs total across all filter params.
          schema:
            type: string
          example: "stage-xyz-67890"
        - name: test_ids
          in: query
          required: false
          description: >-
            Comma-separated list of test execution IDs to fetch directly.
            Maximum 100 IDs total across all filter params.
          schema:
            type: string
          example: "RMAA-AND-160849-XXXX,RMAA-AND-160850-YYYY"
        - name: build_ids
          in: query
          required: false
          description: >-
            Comma-separated list of build IDs to filter by. Maximum 100 IDs total across all filter params.
          schema:
            type: string
          example: "290136414,290136415"
        - name: limit
          in: query
          required: false
          description: >-
            Number of records to return per page. Defaults to 100. Maximum
            is 500. Invalid or non-positive values fall back to 100 with an
            explanatory note in the response. Values above 500 are silently
            clamped to 500.
          schema:
            type: integer
            default: 100
            minimum: 1
            maximum: 500
          example: 50
        - name: cursor
          in: query
          required: false
          description: >-
            Base64-encoded pagination cursor returned as `next_cursor` in the
            previous response. Omit (or pass an empty string) to fetch the
            first page.
          schema:
            type: string
          example: "eyJzb3J0IjpbMTc0MTU5NjAwMDAwMCwiUk1BQS1BTkQtMTYwODQ5LVhYWFgiXX0="
        - name: sort_by
          in: query
          required: false
          description: >-
            Field to sort results by. Defaults to `create_timestamp`.
          schema:
            type: string
            default: create_timestamp
            enum:
              - create_timestamp
              - duration
              - status
          example: "create_timestamp"
        - name: sort_order
          in: query
          required: false
          description: >-
            Sort direction. Defaults to `desc` (newest first).
          schema:
            type: string
            default: desc
            enum:
              - asc
              - desc
          example: "desc"
      responses:
        '200':
          description: Successful operation. Returns matching test records with pagination state.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/TestDataResponse'
              example:
                status: "success"
                data:
                  - test_id: "RMAA-AND-160849-XXXX"
                    env_config:
                      os: "Android"
                      os_version: "13"
                      browser: ""
                      browser_version: ""
                      device: "Galaxy S23"
                      resolution: ""
                    test_metadata:
                      test_name: "Login with valid credentials"
                      status: "failed"
                      duration: 12.5
                      create_timestamp: "2026-03-10T08:00:00Z"
                      start_timestamp: "2026-03-10T08:00:01Z"
                      end_timestamp: "2026-03-10T08:00:13Z"
                      tags: ["smoke", "login"]
                    build_metadata:
                      build_id: "290136414"
                      build_name: "Regression Suite - March Sprint"
                      build_tags: ["regression"]
                      build_create_timestamp: "2026-03-10T07:55:00Z"
                      job_id: "e3251d99-805a-4b3f-a3f5-c0ea9b1d2e3f"
                      task_id: "task-abc-12345"
                      stage_id: "stage-xyz-67890"
                    insights:
                      smart_tags:
                        is_always_failing: false
                        is_new_failure: true
                        is_flaky: false
                        is_performance_anomaly: false
                      flakiness:
                        is_flaky: false
                        flake_rate: 0.0
                        compared_test_ids: []
                      rca:
                        category: "Test Data Issue"
                        summary: "App could not reach backend server during test execution."
                      failure_category: "Test Data Issue"
                pagination:
                  next_cursor: "eyJzb3J0IjpbMTc0MTU5NjAwMDAwMCwiUk1BQS1BTkQtMTYwODQ5LVhYWFgiXX0="
                  has_more: true
                  limit: 100
        '400':
          description: Bad request. Returns a descriptive error for invalid input.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
              examples:
                inverted_range:
                  summary: to_timestamp is before from_timestamp
                  value:
                    error: "to_timestamp must be after from_timestamp"
                    status: "failed"
                missing_from:
                  summary: Only to_timestamp was provided
                  value:
                    error: "from_timestamp is required when to_timestamp is provided"
                    status: "failed"
                exceeds_span:
                  summary: Date range exceeds 31-day maximum span
                  value:
                    error: "date range exceeds maximum allowed span of 31 days per API call"
                    status: "failed"
                too_many_ids:
                  summary: More than 100 IDs total across all filter params
                  value:
                    error: "total filter IDs (101) exceeds the maximum of 100 across all filter params combined"
                    status: "failed"
                invalid_cursor:
                  summary: Malformed pagination cursor
                  value:
                    error: "invalid cursor"
                    status: "failed"
                invalid_sort_by:
                  summary: Unrecognised sort field
                  value:
                    error: "invalid sort_by: \"test_name\" (valid: create_timestamp, duration, status)"
                    status: "failed"
                invalid_sort_order:
                  summary: Invalid sort direction
                  value:
                    error: "invalid sort_order: \"up\" (valid: asc, desc)"
                    status: "failed"
        '401':
          description: Unauthorized. Invalid or missing credentials.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/MessageResponse'
              example:
                message: "Invalid Token"
        '403':
          description: Forbidden. Authorization token is missing from the request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/MessageResponse'
              example:
                message: "Authorization token missing."
        '500':
          description: Server-side error occurred while processing the request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
              example:
                error: "error fetching test data"
                status: "failed"
      security:
        - BasicAuth: []
        - BearerAuth: []

  /rca:
    get:
      tags:
        - Root Cause Analysis
      summary: Get AI-powered Root Cause Analysis for test failures.
      description: >-
        This endpoint retrieves the AI-powered Root Cause Analysis (RCA) for the
        specified test, job, task, or stage IDs. The RCA returned by this API
        matches the same test-level AI RCA displayed on the UI dashboard.


        At least one of test_ids, job_ids, task_ids, or stage_ids must be provided.
      parameters:
        - name: test_ids
          in: query
          description: Comma-separated list of test IDs to fetch RCA for.
          required: false
          schema:
            type: string
          example: RMAA-AND-160849-XXXX
        - name: job_ids
          in: query
          description: Comma-separated list of job IDs to fetch RCA for.
          required: false
          schema:
            type: string
          example: e3251d99-805a-4b3f-a3f5-c0ea9b1d2e3f
        - name: task_ids
          in: query
          description: Comma-separated list of task IDs to fetch RCA for.
          required: false
          schema:
            type: string
          example: task-abc-12345
        - name: stage_ids
          in: query
          description: Comma-separated list of stage IDs to fetch RCA for.
          required: false
          schema:
            type: string
          example: stage-xyz-67890
        - name: page
          in: query
          description: Page number for paginated results. Default is 1.
          required: false
          schema:
            type: integer
            default: 1
            minimum: 1
          example: 1
        - name: limit
          in: query
          description: Maximum number of records to return per page. Default is 10.
          required: false
          schema:
            type: integer
            default: 10
            minimum: 1
            maximum: 100
          example: 10
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/RCAResponse'
              example:
                status: "success"
                data:
                  - test_id: "RMAA-AND-160849-XXXX"
                    job_id: "e3251d99-805a-4b3f-a3f5-c0ea9b1d2e3f"
                    stage_id: "stage-xyz-67890"
                    task_id: "task-abc-12345"
                    build_id: "290136414"
                    rca_category: "Test Data Issue"
                    create_timestamp: "2026-03-05T11:13:32Z"
                    rca_detail:
                      root_cause_category: "Test Data Issue"
                      parent_failure_category: "Infrastructure Issue"
                      failure_summary: "App could not reach backend server, so the expected button was not displayed and the test failed."
                      stack_trace: "org.openqa.selenium.NoSuchElementException: no such element..."
                      root_cause_failure_stack_trace: "java.net.ConnectException: Connection refused (Connection refused)..."
                      analysis:
                        - "Device logs show the app could not connect to the backend server."
                        - "Because the server call failed, the expected UI element was never loaded."
                      steps_to_fix:
                        - issue: "Backend server not reachable from the test device."
                          module: "Mobile app backend connection"
                          suggested_fix: "Ensure the backend server is accessible from the test environment."
                      error_timeline:
                        - step_name: "App connects to backend"
                          timestamp: "2026-03-05T11:17:22Z"
                          source_log: "Device Logs"
                          summary: "Connection to backend server timed out."
                pagination:
                  limit: 10
                  page: 1
                  total: 1
        '400':
          description: Bad request error occurred while processing the request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
              examples:
                ids_required:
                  summary: At least one ID parameter is required
                  value:
                    error: "at least one of test_ids, job_ids, task_ids, or stage_ids is required"
                    status: "failed"
                ids_limit_exceeded:
                  summary: Total number of IDs exceeds the maximum limit of 100
                  value:
                    error: "total number of IDs must not exceed 100"
                    status: "failed"
        '401':
          description: Unauthorized. Invalid or expired authentication token.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/MessageResponse'
              example:
                message: "Invalid Token"
        '403':
          description: Forbidden. Authorization token is missing from the request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/MessageResponse'
              example:
                message: "Authorization token missing."
        '500':
          description: Server-side error occurred while processing the request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
              example:
                error: "error getting rca data"
                status: "failed"
      security:
        - BasicAuth: []
        - BearerAuth: []

  /rca/generate:
    post:
      tags:
        - Root Cause Analysis
      summary: Trigger AI-powered RCA generation for failed tests in a scope.
      description: >-
        Resolves all failed tests under the provided scope (HyperExecute
        jobs/stages/tasks or individual test executions) and dispatches each
        eligible test to the AI RCA analyzer. Tests whose RCA was already
        generated or is currently running are skipped — credits are only
        charged for tests that are newly triggered.


        **Scope**: At least one of `job_ids`, `stage_ids`, `task_ids`, or
        `test_ids` must be provided in the JSON body. Each array is capped at
        **100 IDs**. A scope that resolves to more than **10,000 failed tests**
        is rejected with 413 — narrow the scope in that case.


        **Product routing**: Jobs/stages/tasks always route to the HyperExecute
        analyzer. `test_ids` route to the correct analyzer (HyperExecute or
        Web/Mobile automation) based on each test's stored product, so a mixed
        `test_ids` payload is supported.


        **Credits**: All-or-nothing. If the organization's available credit
        balance is below `credits_required`, a 402 is returned with the
        shortfall details and **no tests are dispatched**.
      operationId: generatePublicRCA
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/GenerateRCARequest'
            example:
              job_ids:
                - "e3251d99-805a-4b3f-a3f5-c0ea9b1d2e3f"
              test_ids:
                - "RMAA-AND-160849-XXXX"
      responses:
        '200':
          description: Successful operation. Returns the dispatch summary.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GenerateRCAResponse'
              example:
                status: "success"
                data:
                  total_tests: 25
                  triggered_count: 20
                  skipped_count: 5
                  skipped_already_generated: 3
                  skipped_in_progress: 2
                  credits_estimated: 20.0
                  test_ids:
                    - "RMAA-AND-160849-XXXX"
                    - "RMAA-AND-160850-YYYY"
                  skipped_test_ids:
                    - "RMAA-AND-160851-ZZZZ"
        '400':
          description: Bad request. Returns a descriptive error for invalid input.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              examples:
                missing_scope:
                  summary: No scope parameter provided
                  value:
                    status: "error"
                    message: "At least one scope parameter is required (job_ids, stage_ids, task_ids, or test_ids)"
                scope_exceeds_max:
                  summary: A scope array exceeds 100 IDs
                  value:
                    status: "error"
                    message: "test_ids must not exceed 100 IDs"
                invalid_body:
                  summary: Malformed JSON body
                  value:
                    status: "error"
                    message: "Invalid request body. Ensure Content-Type is application/json and every scope field is an array of strings (job_ids, stage_ids, task_ids, test_ids)."
        '401':
          description: >-
            Unauthorized. Missing, invalid or expired authentication token.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "Invalid Token"
        '402':
          description: Insufficient credits. No tests were triggered.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/InsufficientCreditsResponse'
              example:
                status: "error"
                message: "Insufficient credits to generate RCA. Please add credits to your account to access credit-based features."
                data:
                  total_tests: 25
                  tests_to_trigger: 20
                  credits_required: 20.0
                  credits_available: 5.0
        '403':
          description: >-
            Forbidden. Returned when AI capability is not enabled for the
            organization or the caller is a guest user. Missing or invalid
            authorization tokens are returned as 401 instead.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "AI capability is not enabled for this organization"
        '413':
          description: Request entity too large. The scope resolves to more failed tests than the per-request maximum.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "Too many failed tests (12500). Please narrow the scope to under 10000 tests"
        '500':
          description: Server-side error occurred while processing the request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "Error fetching failed tests"
      security:
        - BasicAuth: []
        - BearerAuth: []

  /rca/status:
    get:
      tags:
        - Root Cause Analysis
      summary: Get RCA generation progress and completed results for a scope.
      description: >-
        Returns a progress summary (counts of completed, in-progress, failed
        and pending tests) plus a paginated list of completed RCA results for
        all tests under the provided scope. Useful for polling after calling
        POST /rca/generate.


        **Scope**: At least one of `job_ids`, `stage_ids`, `task_ids`, or
        `test_ids` must be provided. Each array is capped at **100 IDs**. A
        scope that resolves to more than **10,000 tests** is rejected with 413.


        **Detail enrichment**: Pass `include_detail=true` to hydrate each
        paginated result with the full `rca_detail` (stack traces, analysis,
        fix suggestions, error timeline). Omitted by default to keep responses
        small for polling use-cases.
      operationId: getPublicRCAStatus
      parameters:
        - name: job_ids
          in: query
          description: HyperExecute job IDs. Serialized as a comma-separated list.
          required: false
          style: form
          explode: false
          schema:
            type: array
            items:
              type: string
            maxItems: 100
          example:
            - "e3251d99-805a-4b3f-a3f5-c0ea9b1d2e3f"
        - name: stage_ids
          in: query
          description: HyperExecute stage IDs. Serialized as a comma-separated list.
          required: false
          style: form
          explode: false
          schema:
            type: array
            items:
              type: string
            maxItems: 100
          example:
            - "stage-xyz-67890"
        - name: task_ids
          in: query
          description: HyperExecute task IDs. Serialized as a comma-separated list.
          required: false
          style: form
          explode: false
          schema:
            type: array
            items:
              type: string
            maxItems: 100
          example:
            - "task-abc-12345"
        - name: test_ids
          in: query
          description: Test execution IDs. Serialized as a comma-separated list.
          required: false
          style: form
          explode: false
          schema:
            type: array
            items:
              type: string
            maxItems: 100
          example:
            - "RMAA-AND-160849-XXXX"
        - name: include_detail
          in: query
          description: >-
            When `true`, enriches each completed RCA result in the current page
            with the full `rca_detail` payload (stack traces, analysis, fix
            suggestions, error timeline). Defaults to `false`.
          required: false
          schema:
            type: boolean
            default: false
          example: false
        - name: limit
          in: query
          description: Number of completed RCA records per page.
          required: false
          schema:
            type: integer
            default: 20
            minimum: 1
            maximum: 100
          example: 20
        - name: offset
          in: query
          description: Zero-based offset into the completed results. Defaults to 0.
          required: false
          schema:
            type: integer
            default: 0
            minimum: 0
          example: 0
      responses:
        '200':
          description: Successful operation. Returns progress summary and paginated results.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/RCAStatusResponse'
              example:
                status: "success"
                data:
                  progress:
                    total_tests: 25
                    completed: 20
                    in_progress: 3
                    failed: 1
                    pending: 1
                  results:
                    - test_id: "RMAA-AND-160849-XXXX"
                      stage_id: "stage-xyz-67890"
                      task_id: "task-abc-12345"
                      job_id: "e3251d99-805a-4b3f-a3f5-c0ea9b1d2e3f"
                      rca_category: "Test Data Issue"
                      parent_failure_category: "Infrastructure Issue"
                      status: "active"
                      created_at: "2026-03-05T11:13:32Z"
                  pagination:
                    total: 20
                    limit: 20
                    offset: 0
        '400':
          description: Bad request. Returns a descriptive error for invalid input.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              examples:
                missing_scope:
                  summary: No scope parameter provided
                  value:
                    status: "error"
                    message: "At least one scope parameter is required (job_ids, stage_ids, task_ids, or test_ids)"
                scope_exceeds_max:
                  summary: A scope array exceeds 100 IDs
                  value:
                    status: "error"
                    message: "test_ids must not exceed 100 IDs"
                invalid_limit:
                  summary: limit is missing, not an integer, or outside 1–100
                  value:
                    status: "error"
                    message: "limit must be a positive integer between 1 and 100"
                invalid_offset:
                  summary: offset is negative or not an integer
                  value:
                    status: "error"
                    message: "offset must be a non-negative integer"
        '401':
          description: >-
            Unauthorized. Missing, invalid or expired authentication token.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "Invalid Token"
        '403':
          description: >-
            Forbidden. Returned when AI capability is not enabled for the
            organization or the caller is a guest user. Missing or invalid
            authorization tokens are returned as 401 instead.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "AI capability is not enabled for this organization"
        '413':
          description: Request entity too large. The scope resolves to more tests than the per-request maximum.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "Too many failed tests (12500). Please narrow the scope to under 10000 tests"
        '500':
          description: Server-side error occurred while processing the request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "Error fetching tests"
      security:
        - BasicAuth: []
        - BearerAuth: []

  /concurrency:
    get:
      tags:
        - Concurrency
      summary: Get time-series concurrency metrics for a product.
      description: >-
        Returns time-bucketed concurrency usage metrics for the specified
        product. Each bucket contains the maximum concurrent sessions, queued
        sessions, allowed concurrency, and queue limit observed in that interval.


        **Product** (required): One of `automation`, `hyperexecute`,
        `app-automation`, `realtime`, `realdevice`. The value is
        case-sensitive.


        **Date range**: Defaults to the last 7 days when no timestamps are
        provided. The maximum allowed span per API call is **31 days**.


        **Granularity**: Controls the width of each time bucket. Valid values
        are `10m`, `1h`, `6h`, `12h`, `1d`. Defaults to `10m` if omitted.
        Coarser values (e.g. `1h`, `6h`) can be passed explicitly for fewer,
        wider buckets.


        **Timezone**: Shifts bucket boundaries to the specified UTC offset
        (format `+HH:MM` or `-HH:MM`, e.g. `+05:30` for IST). Defaults to
        `+00:00` (UTC). Named timezones (e.g. `IST`) are not accepted.
      operationId: getPublicConcurrency
      parameters:
        - name: product
          in: query
          required: true
          description: >-
            Product to query concurrency data for. Must be one of:
            `automation`, `hyperexecute`, `app-automation`, `realtime`,
            `realdevice`. Case-sensitive.
          schema:
            type: string
            enum:
              - automation
              - hyperexecute
              - app-automation
              - realtime
              - realdevice
          example: "automation"
        - name: from_timestamp
          in: query
          required: false
          description: >-
            Start of the date range in RFC3339 UTC format. Must be provided
            together with `to_timestamp` — both must be supplied or both
            omitted. When both are omitted, the range defaults to the last
            7 days. The span between `from_timestamp` and `to_timestamp`
            must not exceed **31 days**.
          schema:
            type: string
            format: date-time
          example: "2026-03-01T00:00:00Z"
        - name: to_timestamp
          in: query
          required: false
          description: >-
            End of the date range in RFC3339 UTC format. Defaults to the
            current time when both timestamps are omitted. Cannot be more than
            1 hour in the future. The span between `from_timestamp` and
            `to_timestamp` must not exceed **31 days**.
          schema:
            type: string
            format: date-time
          example: "2026-03-08T00:00:00Z"
        - name: granularity
          in: query
          required: false
          description: >-
            Time bucket size. Valid values: `10m`, `1h`, `6h`, `12h`, `1d`.
            Defaults to `10m` if omitted. Coarser values can be passed
            explicitly for fewer, wider buckets.
          schema:
            type: string
            enum:
              - 10m
              - 1h
              - 6h
              - 12h
              - 1d
          example: "1h"
        - name: timezone
          in: query
          required: false
          description: >-
            UTC offset to apply to bucket boundaries. Format: `+HH:MM` or
            `-HH:MM` (e.g. `+05:30` for IST, `-08:00` for PST). Hours must be
            0–14, minutes must be 0–59. Named timezones are not accepted.
            Defaults to `+00:00` (UTC).
          schema:
            type: string
          example: "+05:30"
      responses:
        '200':
          description: Successful operation. Returns time-series concurrency buckets and aggregation metadata.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ConcurrencyResponse'
              example:
                status: "success"
                data:
                  - timestamp: "2026-03-03T00:00:00Z"
                    product: "automation"
                    max_concurrency: 42
                    max_queued: 3
                    max_allowed_concurrency: 50
                    max_queued_limit: 150
                  - timestamp: "2026-03-03T00:10:00Z"
                    product: "automation"
                    max_concurrency: 38
                    max_queued: 0
                    max_allowed_concurrency: 50
                    max_queued_limit: 150
                metadata:
                  granularity: "10m"
                  product: "automation"
                  total_buckets: 1008
                  date_range:
                    start: "2026-03-03T00:00:00Z"
                    end: "2026-03-10T00:00:00Z"
        '400':
          description: Bad request. Returns a descriptive error for invalid input.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
              examples:
                missing_product:
                  summary: product parameter is required
                  value:
                    error: "product is required"
                    status: "failed"
                invalid_product:
                  summary: Unrecognised product name
                  value:
                    error: "invalid product: \"Automation\" (valid: app-automation, automation, hyperexecute, realdevice, realtime)"
                    status: "failed"
                invalid_granularity:
                  summary: Granularity value is not one of the accepted options
                  value:
                    error: "invalid granularity: 5m (valid: 10m, 1h, 6h, 12h, 1d)"
                    status: "failed"
                invalid_timezone:
                  summary: Malformed timezone format
                  value:
                    error: "invalid timezone format: IST (expected +HH:MM or -HH:MM, e.g. +05:30)"
                    status: "failed"
        '401':
          description: Unauthorized. Invalid or missing credentials.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/MessageResponse'
              example:
                message: "Invalid Token"
        '403':
          description: Forbidden. Authorization token is missing from the request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/MessageResponse'
              example:
                message: "Authorization token missing."
        '500':
          description: Server-side error occurred while processing the request.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ErrorResponse'
              example:
                error: "error fetching concurrency data"
                status: "failed"
      security:
        - BasicAuth: []
        - BearerAuth: []

  /usage-report/summary:
    get:
      tags:
        - Usage Report
      summary: Get org-wide product usage totals.
      description: >-
        Returns aggregate test-usage totals broken down by product for the
        authenticated caller's organization over the requested date range and
        user-type population.


        **Authentication**: Basic Auth (username + Access Key). The calling
        account must be an **org admin**. For RBAC-enabled organizations the
        caller must hold the Admin role with analytics permissions.


        **User type**: `account-user` returns counts for human accounts;
        `service-user` returns counts for service/API accounts.


        **Date range**: Both `from` and `to` are required wall-clock datetimes
        (`YYYY-MM-DD HH:MM:SS`) interpreted in the specified `timezone`.
        Maximum span is **90 days**.


        **Smart UI note**: Smart UI counts compared screenshots, not test
        executions. Its product key carries `totalScreenshots` only — no
        `totalTests` or `totalDuration`.


        **Partial responses**: When one product's data fetch fails the endpoint
        still returns 200 with the others populated. The failed product's
        counts are zero and `metadata.partial` is `true` — treat this as
        incomplete data, not a real zero.
      operationId: getUsageReportSummary
      parameters:
        - name: type
          in: query
          required: true
          description: >-
            User population to include. `account-user` for human accounts;
            `service-user` for service/API accounts.
          schema:
            type: string
            enum:
              - account-user
              - service-user
          example: "account-user"
        - name: from
          in: query
          required: true
          description: >-
            Range start as a wall-clock datetime: `YYYY-MM-DD HH:MM:SS`,
            interpreted in the `timezone` offset. Example: `2026-06-23 00:00:00`.
          schema:
            type: string
            pattern: '^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$'
          example: "2026-06-23 00:00:00"
        - name: to
          in: query
          required: true
          description: >-
            Range end as a wall-clock datetime: `YYYY-MM-DD HH:MM:SS`,
            interpreted in the `timezone` offset. Must be after `from`.
            Maximum span from `from` is 90 days.
          schema:
            type: string
            pattern: '^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$'
          example: "2026-06-23 23:59:59"
        - name: timezone
          in: query
          required: false
          description: >-
            UTC offset for interpreting `from` and `to`. Two formats accepted:


            - ISO offset `±HH:MM` (e.g. `+05:30`, `-08:00`, `+00:00`).

            - Raw minutes from JS `Date.getTimezoneOffset()` (e.g. `-330`
              for IST, `300` for US Eastern) — sign-inverted vs ISO. The API
              converts automatically.


            Note: `+` must be percent-encoded as `%2B` in URLs. A leading
            space is also accepted and normalized to `+`.


            Defaults to `+00:00` (UTC) when omitted.
          schema:
            anyOf:
              - type: string
                pattern: '^[+\- ]?[0-9]{2}:[0-9]{2}$'
                description: ISO offset ±HH:MM (leading space accepted as +)
              - type: string
                pattern: '^-?\d{1,4}$'
                description: JS Date.getTimezoneOffset() minutes (sign-inverted vs ISO)
          example: "+00:00"
      responses:
        '200':
          description: >-
            Successful operation. Returns per-product usage totals. When
            `metadata.partial` is true one product group's fetch failed —
            treat those zero counts as unavailable, not real.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UsageSummaryResponse'
              examples:
                all_ok:
                  summary: All product fetches succeeded
                  value:
                    status: "success"
                    data:
                      metadata:
                        type: "account-user"
                        totalUsers: 12
                        from: "2026-06-23 00:00:00"
                        to: "2026-06-23 23:59:59"
                        timezone: "+00:00"
                        organization:
                          id: "12345"
                          name: "Acme Corp"
                      products:
                        automation:
                          totalTests: 8450
                          totalDuration: 312540
                        app-automation:
                          totalTests: 1200
                          totalDuration: 98400
                        hyperexecute:
                          totalTests: 3100
                          totalDuration: 210000
                        realtime:
                          totalTests: 540
                          totalDuration: 43200
                        realdevice:
                          totalTests: 275
                          totalDuration: 22000
                        smartui:
                          totalScreenshots: 6800
                partial_smartui_failed:
                  summary: Smart UI fetch failed — treat zero as unavailable
                  value:
                    status: "success"
                    data:
                      metadata:
                        type: "account-user"
                        totalUsers: 12
                        from: "2026-06-23 00:00:00"
                        to: "2026-06-23 23:59:59"
                        timezone: "+00:00"
                        organization:
                          id: "12345"
                          name: "Acme Corp"
                        partial: true
                      products:
                        automation:
                          totalTests: 8450
                          totalDuration: 312540
                        app-automation:
                          totalTests: 1200
                          totalDuration: 98400
                        hyperexecute:
                          totalTests: 3100
                          totalDuration: 210000
                        realtime:
                          totalTests: 540
                          totalDuration: 43200
                        realdevice:
                          totalTests: 275
                          totalDuration: 22000
                        smartui:
                          totalScreenshots: 0
        '400':
          description: Bad request. Missing or invalid query parameter.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              examples:
                missing_type:
                  summary: type parameter missing or invalid
                  value:
                    status: "error"
                    message: "invalid or missing type (valid: [account-user service-user])"
                missing_from:
                  summary: from parameter missing
                  value:
                    status: "error"
                    message: "from is required"
                missing_to:
                  summary: to parameter missing
                  value:
                    status: "error"
                    message: "to is required"
                to_before_from:
                  summary: to is not after from
                  value:
                    status: "error"
                    message: "to must be after from"
                range_exceeds_max:
                  summary: Date range exceeds 90-day maximum
                  value:
                    status: "error"
                    message: "date range exceeds maximum allowed span of 90 days"
                invalid_timezone:
                  summary: Malformed timezone format
                  value:
                    status: "error"
                    message: "invalid timezone format: IST (expected +HH:MM or -HH:MM, e.g. +05:30)"
        '401':
          description: Unauthorized. Invalid or missing credentials.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "Invalid or missing Basic Auth credentials"
        '403':
          description: >-
            Forbidden. Caller is not an org admin, or (for RBAC orgs) does
            not hold the required analytics admin permissions.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              examples:
                non_admin:
                  summary: Non-admin caller (non-RBAC org)
                  value:
                    status: "error"
                    message: "admin access required"
                rbac_insufficient:
                  summary: Insufficient RBAC permissions
                  value:
                    status: "error"
                    message: "access restricted: your role does not have the required permissions to view the usage report. Required permissions to add: analytics:admin"
        '500':
          description: Server-side error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "failed to resolve org users"
      security:
        - BasicAuth: []
        - BearerAuth: []

  /usage-report/drilldown:
    get:
      tags:
        - Usage Report
      summary: Get per-user usage breakdown for a single product.
      description: >-
        Returns a paginated, usage-descending list of users and their
        individual test counts for the specified product, date range, and
        user-type population.


        **Authentication**: Same as `/usage-report/summary` — Basic Auth,
        admin-only.


        **Smart UI**: When `product=smartui` the response shape changes —
        `metadata.totalTests`/`totalDuration` are replaced by
        `metadata.totalScreenshots`, and each user row exposes
        `totalScreenshots` instead of `totalTestsRun`/`totalDuration`.


        **Scoping note**: `metadata.totalTests` (or `totalScreenshots`) is
        the **org-wide** total for the product across all users and both user
        types. `metadata.totalUsers` and the `users` list are scoped to the
        requested `type`. These values are intentionally independent.


        **Partial responses**: If the data fetch fails the endpoint returns
        200 with an empty `users` list and `metadata.partial: true`. Do not
        treat this as a real zero.
      operationId: getUsageReportDrilldown
      parameters:
        - name: type
          in: query
          required: true
          description: >-
            User population to include. `account-user` for human accounts;
            `service-user` for service/API accounts.
          schema:
            type: string
            enum:
              - account-user
              - service-user
          example: "account-user"
        - name: product
          in: query
          required: true
          description: Product to drill down into. Case-sensitive.
          schema:
            type: string
            enum:
              - automation
              - app-automation
              - hyperexecute
              - realtime
              - realdevice
              - smartui
          example: "automation"
        - name: from
          in: query
          required: true
          description: >-
            Range start as a wall-clock datetime: `YYYY-MM-DD HH:MM:SS`,
            interpreted in the `timezone` offset. Example: `2026-06-23 00:00:00`.
          schema:
            type: string
            pattern: '^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$'
          example: "2026-06-23 00:00:00"
        - name: to
          in: query
          required: true
          description: >-
            Range end as a wall-clock datetime: `YYYY-MM-DD HH:MM:SS`,
            interpreted in the `timezone` offset. Must be after `from`.
            Maximum span from `from` is 90 days.
          schema:
            type: string
            pattern: '^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$'
          example: "2026-06-23 23:59:59"
        - name: timezone
          in: query
          required: false
          description: >-
            UTC offset for interpreting `from` and `to`. Two formats accepted:


            - ISO offset `±HH:MM` (e.g. `+05:30`, `-08:00`, `+00:00`).

            - Raw minutes from JS `Date.getTimezoneOffset()` (e.g. `-330`
              for IST, `300` for US Eastern) — sign-inverted vs ISO. The API
              converts automatically.


            Note: `+` must be percent-encoded as `%2B` in URLs. A leading
            space is also accepted and normalized to `+`.


            Defaults to `+00:00` (UTC) when omitted.
          schema:
            anyOf:
              - type: string
                pattern: '^[+\- ]?[0-9]{2}:[0-9]{2}$'
                description: ISO offset ±HH:MM (leading space accepted as +)
              - type: string
                pattern: '^-?\d{1,4}$'
                description: JS Date.getTimezoneOffset() minutes (sign-inverted vs ISO)
          example: "+00:00"
        - name: page
          in: query
          required: false
          description: Page number (1-based). Defaults to 1.
          schema:
            type: integer
            default: 1
            minimum: 1
          example: 1
        - name: limit
          in: query
          required: false
          description: Results per page. Default 10, maximum 100.
          schema:
            type: integer
            default: 10
            minimum: 1
            maximum: 100
          example: 10
      responses:
        '200':
          description: >-
            Successful operation. Returns per-user rows sorted descending by
            usage. When `product=smartui`, `metadata.totalScreenshots` replaces
            `totalTests`/`totalDuration` and each user row carries
            `totalScreenshots` instead of `totalTestsRun`/`totalDuration`.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UsageDrilldownResponse'
              examples:
                non_smartui:
                  summary: Standard product drilldown (e.g. automation)
                  value:
                    status: "success"
                    data:
                      metadata:
                        type: "account-user"
                        product: "automation"
                        totalUsers: 8
                        totalTests: 8450
                        totalDuration: 312540
                        from: "2026-06-23 00:00:00"
                        to: "2026-06-23 23:59:59"
                        timezone: "+05:30"
                        organization:
                          id: "12345"
                          name: "Acme Corp"
                        pagination:
                          limit: 10
                          page: 1
                          total: 8
                          totalPages: 1
                      users:
                        - id: "67890"
                          username: "johndoe"
                          email: "john@example.com"
                          totalTestsRun: 3200
                          totalDuration: 120000
                        - id: "67891"
                          username: "janedoe"
                          email: "jane@example.com"
                          totalTestsRun: 2100
                          totalDuration: 85000
                smartui:
                  summary: Smart UI drilldown (product=smartui)
                  value:
                    status: "success"
                    data:
                      metadata:
                        type: "account-user"
                        product: "smartui"
                        totalUsers: 4
                        totalScreenshots: 6800
                        from: "2026-06-23 00:00:00"
                        to: "2026-06-23 23:59:59"
                        timezone: "+05:30"
                        organization:
                          id: "12345"
                          name: "Acme Corp"
                        pagination:
                          limit: 10
                          page: 1
                          total: 4
                          totalPages: 1
                      users:
                        - id: "67890"
                          username: "johndoe"
                          email: "john@example.com"
                          totalScreenshots: 4200
        '400':
          description: Bad request. Missing or invalid query parameter.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              examples:
                missing_type:
                  summary: type missing or invalid
                  value:
                    status: "error"
                    message: "invalid or missing type (valid: [account-user service-user])"
                missing_product:
                  summary: product missing or invalid
                  value:
                    status: "error"
                    message: "invalid or missing product (valid: [automation app-automation hyperexecute realtime realdevice smartui])"
                missing_from:
                  summary: from parameter missing
                  value:
                    status: "error"
                    message: "from is required"
                to_before_from:
                  summary: to is not after from
                  value:
                    status: "error"
                    message: "to must be after from"
                range_exceeds_max:
                  summary: Date range exceeds 90-day maximum
                  value:
                    status: "error"
                    message: "date range exceeds maximum allowed span of 90 days"
        '401':
          description: Unauthorized. Invalid or missing credentials.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "Invalid or missing Basic Auth credentials"
        '403':
          description: Forbidden. Caller is not an org admin or lacks RBAC permissions.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              examples:
                non_admin:
                  summary: Non-admin caller
                  value:
                    status: "error"
                    message: "admin access required"
                rbac_insufficient:
                  summary: Insufficient RBAC permissions
                  value:
                    status: "error"
                    message: "access restricted: your role does not have the required permissions to view the usage report. Required permissions to add: analytics:admin"
        '500':
          description: Server-side error.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusErrorResponse'
              example:
                status: "error"
                message: "failed to resolve org users"
      security:
        - BasicAuth: []
        - BearerAuth: []
```

---


## 11. Performance Testing

**File:** `performance-testing.yaml` | **Size:** 22744 bytes | **Lines:** 643

```yaml
openapi: 3.0.0
info:
  title: TestMu AI Performance Testing API Documentation
  version: 1.0.1
servers:
    - url: 'https://api.hyperexecute.cloud'
paths:
  /v1.0/performance/summary/{jobId}:
    get:
      tags:
        - Performance Testing
      summary: Retrieve a summary of performance testing results for a specific job.
      description: This API provides an overview of performance test results for a given job, including job ID, execution time, duration, request count, bandwidth, throughput, response times, ramp time, and user count. It helps assess the system's overall performance and scalability.
      parameters:
      - name: jobId
        in: path
        description: Enter your HyperExecute JobID
        required: true
        style: simple
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/PerformanceTestingSummary'
              example:
                type: "summary"
                data:
                  job_id: "493bac0f-e412-445b-b85a-88df79f56de3"
                  start_timestamp: "2025-10-16T08:11:21.000000000Z"
                  end_timestamp: "2025-10-16T08:13:06.000000000Z"
                  duration: 105000
                  total_requests: 669
                  total_errors: 668
                  error_rate: 99.85052316890882
                  avg_bandwidth: 0
                  avg_throughput: 9.416666666666666
                  min_response_time: 0
                  max_response_time: 6127
                  avg_response_time: 570.9144927998836
                  avg_latency: 570.9144927998836
                  ramp_time: 0
                  users: 1
        400:
          description: Bad request error occurred while processing the request.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                  status:
                    type: string
              examples:
                invalid_type:
                  summary: Invalid type query param
                  value:
                    error: "invalid 'type' query param (use: summary | requestStats | errorStats)"
                    status: "failed"
        404:
          description: No data found for the provided jobId.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                  status:
                    type: string
              example:
                error: "job not found or not accessible by this organization"
                status: "failed"
        500:
          description: Server-side error occurred while processing the request.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                  status:
                    type: string
              example:
                error: "error getting summary"
                status: "failed"
      security:
        - basicAuth: []
  /v1.0/performance/requestStats/{jobId}:
    get:
      tags:
        - Performance Testing
      summary: Fetch detailed request statistics for a performance test within a specific job.
      description: This API retrieves detailed performance data for requests made during a test, including throughput, bandwidth, response times, and error counts, helping identify bottlenecks and analyze system performance under load.
      parameters:
      - name: jobId
        in: path
        description: Enter your HyperExecute JobID
        required: true
        style: simple
        explode: true
        schema:
          type: string
      - name: limit
        in: query
        description: Maximum number of records to return. Default value is 100
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: offset
        in: query
        description: Number of records to skip before starting to return. Default-0, Max - 10,000
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: sortBy
        in: query
        description: Sort the records by a specific field.
        required: false
        style: form
        explode: true
        schema:
          default: label
          type: string
          enum:
            - label
            - samples
            - start_timestamp
            - end_timestamp
            - duration
            - avg_throughput
            - avg_bandwidth
            - error_count
            - error_rate_in_current_sample
            - error_rate_in_all_samples
            - min_response_time
            - max_response_time
            - avg_response_time
            - min_latency
            - max_latency
            - avg_latency
            - pct50
            - pct90
            - pct95
            - pct99
      - name: order
        in: query
        description: Sort order for the records.
        required: false
        style: form
        explode: true
        schema:
          default: asc
          type: string
          enum:
            - asc
            - desc
      - name: timeRange
        in: query
        description: Time range for filtering records in the format "startTimestamp,endTimestamp" (e.g., 2023-01-01T00:00:00,2023-02-01T00:00:00).
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: timeZone
        in: query
        description: "Time zone for filtering records. Must be in the format [+/-]HH:mm. Required when timeRange is provided. Example: +05:30"
        required: false
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/PerformanceTestingRequestStatistics'
              example:
                type: "requestStats"
                data:
                  - label: "HTTP: This is label"
                    avg_throughput: 1.9142857142857144
                    avg_bandwidth: 194.6
                    "#samples": 134
                    start_timestamp: "2025-10-16T08:12:11.104000000Z"
                    end_timestamp: "2025-10-16T08:13:03.044000000Z"
                    response_time_stats:
                      min: 64
                      max: 284
                      avg: 88.82213047398498
                    response_time_percentiles:
                      "50.0": 0
                      "90.0": 105.13636363636364
                      "95.0": 116.34090909090911
                      "99.0": 169.53090909090895
                    error_count: 134
                    latency_stats:
                      min: 64
                      max: 284
                      avg: 85.65517241379311
                    duration: 51940
                    error_rate_in_current_sample: 100
                    error_rate_in_all_samples: 20.029895366218238
        400:
          description: Bad request error occurred while processing the request.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                  status:
                    type: string
              examples:
                invalid_limit:
                  summary: Invalid limit query param
                  value:
                    error: "invalid 'limit' query param: must be a positive integer"
                    status: "failed"
                invalid_time_range:
                  summary: Invalid time range
                  value:
                    error: "invalid time range"
                    message: "timeRange should be in the format: [startTimestamp,endTimestamp]"
                invalid_time_zone:
                  summary: Invalid time zone
                  value:
                    error: "timeZone is required when timeRange is provided: Format: [+/-]HH:mm"
                invalid_offset:
                  summary: Invalid offset
                  value:
                    error: "offset should be less than 10000"
        404:
          description: Job not found or not accessible
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                  status:
                    type: string
              example:
                error: "job not found or not accessible by this organization"
                status: "failed"
        500:
          description: Server-side error occurred while processing the request.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                  status:
                    type: string
              example:
                error: "error getting request stats"
                status: "failed"
      security:
        - basicAuth: []
  /v1.0/performance/errorStatsByLabel/{jobId}:
    get:
      tags:
        - Performance Testing
      summary: Fetch detailed error statistics for a performance test within a specific job.
      description: This API retrieves detailed error statistics for requests made during a test, including error counts, error rates, and response times, helping identify bottlenecks and analyze system performance under load.
      parameters:
      - name: jobId
        in: path
        description: Enter your HyperExecute JobID
        required: true
        style: simple
        explode: true
        schema:
          type: string
      - name: limit
        in: query
        description: Maximum number of records to return. Default value is 100
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: offset
        in: query
        description: Number of records to skip before starting to return. Default-0, Max - 10,000
        required: false
        style: form
        explode: true
        schema:
          type: integer
      - name: sortBy
        in: query
        description: Sort the records by a specific field.
        required: false
        style: form
        explode: true
        schema:
          default: label
          type: string
          enum:
            - label
            - response_code
            - error_count
            - error_rate_in_current_sample
            - error_rate_in_all_samples
      - name: order
        in: query
        description: Sort order for the records. Default is ascending.
        required: false
        style: form
        explode: true
        schema:
          default: asc
          type: string
          enum:
            - asc
            - desc
      - name: timeRange
        in: query
        description: Time range for filtering records in the format "startTimestamp,endTimestamp" (e.g., 2023-01-01T00:00:00,2023-02-01T00:00:00).
        required: false
        style: form
        explode: true
        schema:
          type: string
      - name: timeZone
        in: query
        description: "Time zone for filtering records. Must be in the format [+/-]HH:mm. Required when timeRange is provided. Example: +05:30"
        required: false
        style: form
        explode: true
        schema:
          type: string
      responses:
        200:
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/PerformanceTestingErrorStatistics'
              example:
                type: "errorStats"
                data:
                  - label: "HTTP:1 - This is label"
                    response_code: "404"
                    error_count: 134
                    error_rate_in_current_sample: 100
                    error_rate_in_all_samples: 20.029895366218238
        400:
          description: Bad request error occurred while processing the request.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                  status:
                    type: string
              examples:
                invalid_type:
                  summary: Invalid type query param
                  value:
                    error: "invalid 'type' query param (use: summary | requestStats | errorStats)"
                    status: "failed"
                invalid_time_range:
                  summary: Invalid time range
                  value:
                    error: "invalid time range"
                    message: "timeRange should be in the format: [startTimestamp,endTimestamp]"
                invalid_time_zone:
                  summary: Invalid time zone
                  value:
                    error: "timeZone is required when timeRange is provided: Format: [+/-]HH:mm"
                invalid_offset:
                  summary: Invalid offset
                  value:
                    error: "offset should be less than 10000"
        404:
          description: Job not found or not accessible
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                  status:
                    type: string
              example:
                error: "job not found or not accessible by this organization"
                status: "failed"
        500:
          description: Server-side error occurred while processing the request.
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                  status:
                    type: string
              example:
                error: "error getting error stats"
                status: "failed"
      security:
        - basicAuth: []
components:
  schemas:
    PerformanceTestingSummary:
      type: object
      properties:
        type:
          type: string
          enum:
            - summary
          description: Type of response data
        data:
          type: object
          properties:
            job_id:
              type: string
              example: "493bac0f-e412-445b-b85a-88df79f56de3"
              description: Unique identifier for the Performance Test Job.
            start_timestamp:
              type: string
              example: "2025-10-16T08:11:21.000000000Z"
              description: Timestamp of the first request recorded in the test in format (e.g., "2024-09-20T07:09:30Z").
            end_timestamp:
              type: string
              example: "2025-10-16T08:13:06.000000000Z"
              description: Timestamp of the last request recorded in the test in format (e.g., "2024-09-20T07:09:42Z").
            duration:
              type: number
              example: 105000
              description: Duration of the test in milliseconds.
            total_requests:
              type: integer
              example: 669
              description: Total number of requests made during the performance test.
            total_errors:
              type: integer
              example: 668
              description: Total number of errors encountered during the test.
            error_rate:
              type: number
              example: 99.85052316890882
              description: Error rate in percentage.
            avg_bandwidth:
              type: integer
              example: 0
              description: Average bandwidth in bytes per second during the test.
            avg_throughput:
              type: number
              example: 9.416666666666666
              description: Average number of requests per second throughout the test.
            min_response_time:
              type: integer
              example: 0
              description: Minimum response time for the requests (in milliseconds).
            max_response_time:
              type: integer
              example: 6127
              description: Maximum response time for the requests (in milliseconds).
            avg_response_time:
              type: number
              example: 570.9144927998836
              description: Average response time for the requests (in milliseconds).
            avg_latency:
              type: number
              example: 570.9144927998836
              description: Average latency for the requests (in milliseconds).
            ramp_time:
              type: integer
              example: 0
              description: Configured ramp-up time (in seconds).
            users:
              type: integer
              example: 1
              description: Configured virtual users.
      required:
        - type
        - data
    
    PerformanceTestingRequestStatistics:
      type: object
      properties:
        type:
          type: string
          enum:
            - requestStats
          description: Type of response data
        data:
          type: array
          items:
            properties:
              label:
                type: string
                example: "HTTP: This is label"
                description: The name of the request made during the test.
              avg_throughput:
                type: number
                example: 1.9142857142857144
                description: Average number of requests per second. 
              avg_bandwidth:
                type: number
                example: 194.6
                description: Average bandwidth usage (bytes per second).
              "#samples":
                type: number
                example: 134
                description: Total number of samples taken for this request.
              start_timestamp:
                type: string
                example: "2025-10-16T08:12:11.104000000Z"
                description: Timestamp indicating when the first request recorded in format (e.g., "2024-09-20T07:09:42Z").
              end_timestamp:
                type: string
                example: "2025-10-16T08:13:03.044000000Z"
                description: Timestamp indicating when the last request recorded in format (e.g., "2024-09-20T07:09:42Z").
              response_time_stats:
                type: object
                properties:
                  min:
                    type: number
                    example: 64
                    description: Minimum response time for the request (in milliseconds).
                  max:
                    type: number
                    example: 284
                    description: Maximum response time for the request (in milliseconds).
                  avg:
                    type: number
                    example: 88.82213047398498
                    description: Average response time for the request (in milliseconds).
              response_time_percentiles:
                type: object
                properties:
                  "50.0":
                    type: number
                    example: 0
                  "90.0":
                    type: number
                    example: 105.13636363636364
                  "95.0":
                    type: number
                    example: 116.34090909090911
                  "99.0":
                    type: number
                    example: 169.53090909090895
                description: Percentiles for response times (50th, 90th, 95th, 99th).
              error_count:
                type: number
                example: 134
                description: Total number of errors encountered during the request.
              latency_stats:
                type: object
                properties:
                  min:
                    type: number
                    example: 64
                    description: Minimum latency for the request (in milliseconds).
                  max:
                    type: number
                    example: 284
                    description: Maximum latency for the request (in milliseconds).
                  avg:
                    type: number
                    example: 85.65517241379311
                    description: Average latency for the request (in milliseconds).
              duration:
                type: number
                example: 51940
                description: Duration of the request in milliseconds.
              error_rate_in_current_sample:
                type: number
                example: 100
                description: Error rate in the current sample.
              error_rate_in_all_samples:
                type: number
                example: 20.029895366218238
                description: Error rate in all samples.
      required:
        - type
        - data

    PerformanceTestingErrorStatistics:
      type: object
      properties:
        type:
          type: string
          enum:
            - errorStats
          description: Type of response data
        data:
          type: array
          items:
            properties:
              label:
                type: string
                example: "HTTP:1 - This is label"
                description: The name of the request made during the test.
              response_code:
                type: string
                example: "404"
                description: The HTTP response code for the request.
              error_count:
                type: integer
                example: 134
                description: Total number of errors encountered during the request.
              error_rate_in_current_sample:
                type: number
                example: 100
                description: Error rate in the current sample.
              error_rate_in_all_samples:
                type: number
                example: 20.029895366218238
                description: Error rate in all samples.
      required:
        - type
        - data

  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```

---


## 12. Audit Logs

**File:** `audit-logs.yaml` | **Size:** 36680 bytes | **Lines:** 807

```yaml
openapi: 3.0.3
info:
  title: TestMu AI Audit Logs API Documentation
  version: 1.0.0
  description: "API documentation of Audit logs"
servers:
- url: 'https://audit-logs.lambdatest.com/'
- url: 'https://eu-audit-logs.lambdatest.com/'
paths:
  /api/logs:
    get:
      summary: Get Audit logs
      description: Get Audit logs
      operationId: getAuditLogs
      security:
        - basicAuth: []
      tags:
        - Audit logs
      parameters:
        - name: limit
          in: query
          description: limit number of events
          schema:
            type: string
            example: '10'
        - name: offset
          in: query
          description: beginning index of result
          schema:
            type: string
            example: '0'
        - name: start
          in: query
          description: Starting date
          required: true
          schema:
            type: string
            example: '2023-10-24'
        - name: end
          in: query
          description: End date
          required: true
          schema:
            type: string
            example: '2023-11-07'
      responses:
        '200':
          description: Success
          content:
            application/json:
              schema:
                type: object
                properties:
                  PageCount:
                    type: number
                    example: 2
                  Result:
                    type: array
                    items:
                      type: object
                      properties:
                        activity_description:
                          type: string
                          example: Admin changed user's password
                        activity_name:
                          type: string
                          example: Organization - User Password Changed
                        changes:
                          type: object
                          nullable: true
                          example: null
                        email:
                          type: string
                          example: pawanr@lambdatest.com
                        event:
                          type: string
                          example: org.user.password.changed
                        event_id:
                          type: string
                          example: 9fa69cb3-e102-4a25-80ce-d1aa1705288a
                        event_time:
                          type: string
                          example: '2023-11-07T12:16:47Z'
                        ip:
                          type: string
                          example: 143.110.182.88
                        metadata:
                          nullable: true
                          example: null
                        name:
                          type: string
                          example: pawan1235
                        organization_name:
                          type: string
                          example: 'lambdatest'
                        original:
                          type: object
                          nullable: true
                          example: null
                        target_identifier:
                          type: object
                          properties:
                            email:
                              type: string
                              example: pawanr@lambdatest.com
                            role:
                              type: string
                              example: Admin
                        user_agent:
                          type: string
                          example: >-
                            Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                            AppleWebKit/537.36 (KHTML, like Gecko)
                            Chrome/106.0.0.0 Safari/537.36
                    example:
                      - activity_description: Admin changed user's password
                        activity_name: Organization - User Password Changed
                        changes: null
                        email: pawanr@lambdatest.com
                        event: org.user.password.changed
                        event_id: 9fa69cb3-e102-4a25-80ce-d1aa1705288a
                        event_time: '2023-11-07T12:16:47Z'
                        ip: 143.110.182.88
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr@lambdatest.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User - Logged In
                        activity_name: User - Logged In
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: user.login
                        event_id: adb47d4c-1338-457a-b962-97595fa4c3e2
                        event_time: '2023-11-07T08:28:26Z'
                        ip: 143.110.182.88
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User - Logged In
                        activity_name: User - Logged In
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: user.login
                        event_id: 0c2ef83a-e70d-4fc8-8a99-4e6164708097
                        event_time: '2023-11-03T12:54:14Z'
                        ip: 14.97.133.26
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User - Logged In
                        activity_name: User - Logged In
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: user.login
                        event_id: 3ee12e5d-458a-481f-a473-44e298a06b0b
                        event_time: '2023-11-03T11:49:30Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: Admin updated user's role
                        activity_name: Organization - User Role Updated
                        changes:
                          organization_role: User
                        email: pawanr@lambdatest.com
                        event: org.user.role.updated
                        event_id: 33b3a96a-9f1d-4f39-be31-ded45a4872d6
                        event_time: '2023-11-03T11:49:08Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original:
                          organization_role: Admin
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User - Logged In
                        activity_name: User - Logged In
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: user.login
                        event_id: c97da1fd-6fdb-477c-870d-6847a7566675
                        event_time: '2023-11-03T11:48:31Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: Invitation was accepted
                        activity_name: Organization - Invitation Accepted
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: org.invitation.accepted
                        event_id: 00f1d32b-bd9e-4c1c-9824-47a31fe3ddeb
                        event_time: '2023-11-03T11:48:03Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User - Logged In
                        activity_name: User - Logged In
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: user.login
                        event_id: e7a71f57-9377-4716-b488-1fc3018ba2fc
                        event_time: '2023-11-03T11:48:03Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: Admin invited users to their organization
                        activity_name: Organization - Invitation Sent
                        changes: null
                        email: pawanr@lambdatest.com
                        event: org.invitation.sent
                        event_id: 4f764665-8aaa-472d-a840-2b5b6dbc6d57
                        event_time: '2023-11-03T11:47:18Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                          role: Admin
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User updated their email preferenece
                        activity_name: User - Email Preference Updated
                        changes:
                          automation: true
                          event: true
                          feedback: true
                          maintenance: true
                          marketing: true
                          newsletter: true
                          offer: true
                          product: true
                          product_onboarding: true
                          report: true
                          weekly: true
                        email: pawanr@lambdatest.com
                        event: user.email-preference.updated
                        event_id: 085b3823-5df2-482f-9026-0ecd7f9eb967
                        event_time: '2023-10-26T08:38:27Z'
                        ip: 143.110.182.88
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original:
                          automation: true
                          event: true
                          feedback: true
                          maintenance: true
                          marketing: true
                          newsletter: true
                          offer: true
                          product: true
                          product_onboarding: true
                          report: true
                          weekly: true
                        target_identifier:
                          email: pawanr@lambdatest.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User updated their email preferenece
                        activity_name: User - Email Preference Updated
                        changes:
                          automation: true
                          event: true
                          feedback: true
                          maintenance: true
                          marketing: true
                          newsletter: true
                          offer: true
                          product: true
                          product_onboarding: true
                          report: true
                          weekly: true
                        email: pawanr@lambdatest.com
                        event: user.email-preference.updated
                        event_id: 7bcb8eb0-b5f6-4c38-aee1-04ab643dd8a7
                        event_time: '2023-10-26T08:38:19Z'
                        ip: 143.110.182.88
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original:
                          automation: false
                          event: true
                          feedback: true
                          maintenance: true
                          marketing: false
                          newsletter: true
                          offer: true
                          product: true
                          product_onboarding: true
                          report: true
                          weekly: true
                        target_identifier:
                          email: pawanr@lambdatest.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User updated their email preferenece
                        activity_name: User - Email Preference Updated
                        changes:
                          marketing: false
                        email: pawanr@lambdatest.com
                        event: user.email-preference.updated
                        event_id: 3108990a-9c21-4b7c-b4f2-ca32321b8015
                        event_time: '2023-10-26T08:38:18Z'
                        ip: 143.110.182.88
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original:
                          marketing: true
                        target_identifier:
                          email: pawanr@lambdatest.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
              examples:
                Success:
                  value:
                    PageCount: 2
                    Result:
                      - activity_description: Admin changed user's password
                        activity_name: Organization - User Password Changed
                        changes: null
                        email: pawanr@lambdatest.com
                        event: org.user.password.changed
                        event_id: 9fa69cb3-e102-4a25-80ce-d1aa1705288a
                        event_time: '2023-11-07T12:16:47Z'
                        ip: 143.110.182.88
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr@lambdatest.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User - Logged In
                        activity_name: User - Logged In
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: user.login
                        event_id: adb47d4c-1338-457a-b962-97595fa4c3e2
                        event_time: '2023-11-07T08:28:26Z'
                        ip: 143.110.182.88
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User - Logged In
                        activity_name: User - Logged In
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: user.login
                        event_id: 0c2ef83a-e70d-4fc8-8a99-4e6164708097
                        event_time: '2023-11-03T12:54:14Z'
                        ip: 14.97.133.26
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User - Logged In
                        activity_name: User - Logged In
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: user.login
                        event_id: 3ee12e5d-458a-481f-a473-44e298a06b0b
                        event_time: '2023-11-03T11:49:30Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: Admin updated user's role
                        activity_name: Organization - User Role Updated
                        changes:
                          organization_role: User
                        email: pawanr@lambdatest.com
                        event: org.user.role.updated
                        event_id: 33b3a96a-9f1d-4f39-be31-ded45a4872d6
                        event_time: '2023-11-03T11:49:08Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original:
                          organization_role: Admin
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User - Logged In
                        activity_name: User - Logged In
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: user.login
                        event_id: c97da1fd-6fdb-477c-870d-6847a7566675
                        event_time: '2023-11-03T11:48:31Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: Invitation was accepted
                        activity_name: Organization - Invitation Accepted
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: org.invitation.accepted
                        event_id: 00f1d32b-bd9e-4c1c-9824-47a31fe3ddeb
                        event_time: '2023-11-03T11:48:03Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User - Logged In
                        activity_name: User - Logged In
                        changes: null
                        email: pawanr124@ltqa.lambdatestautomation.com
                        event: user.login
                        event_id: e7a71f57-9377-4716-b488-1fc3018ba2fc
                        event_time: '2023-11-03T11:48:03Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: Pawan Rai
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: Admin invited users to their organization
                        activity_name: Organization - Invitation Sent
                        changes: null
                        email: pawanr@lambdatest.com
                        event: org.invitation.sent
                        event_id: 4f764665-8aaa-472d-a840-2b5b6dbc6d57
                        event_time: '2023-11-03T11:47:18Z'
                        ip: 103.90.204.46
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original: null
                        target_identifier:
                          email: pawanr124@ltqa.lambdatestautomation.com
                          role: Admin
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User updated their email preferenece
                        activity_name: User - Email Preference Updated
                        changes:
                          automation: true
                          event: true
                          feedback: true
                          maintenance: true
                          marketing: true
                          newsletter: true
                          offer: true
                          product: true
                          product_onboarding: true
                          report: true
                          weekly: true
                        email: pawanr@lambdatest.com
                        event: user.email-preference.updated
                        event_id: 085b3823-5df2-482f-9026-0ecd7f9eb967
                        event_time: '2023-10-26T08:38:27Z'
                        ip: 143.110.182.88
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original:
                          automation: true
                          event: true
                          feedback: true
                          maintenance: true
                          marketing: true
                          newsletter: true
                          offer: true
                          product: true
                          product_onboarding: true
                          report: true
                          weekly: true
                        target_identifier:
                          email: pawanr@lambdatest.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User updated their email preferenece
                        activity_name: User - Email Preference Updated
                        changes:
                          automation: true
                          event: true
                          feedback: true
                          maintenance: true
                          marketing: true
                          newsletter: true
                          offer: true
                          product: true
                          product_onboarding: true
                          report: true
                          weekly: true
                        email: pawanr@lambdatest.com
                        event: user.email-preference.updated
                        event_id: 7bcb8eb0-b5f6-4c38-aee1-04ab643dd8a7
                        event_time: '2023-10-26T08:38:19Z'
                        ip: 143.110.182.88
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original:
                          automation: false
                          event: true
                          feedback: true
                          maintenance: true
                          marketing: false
                          newsletter: true
                          offer: true
                          product: true
                          product_onboarding: true
                          report: true
                          weekly: true
                        target_identifier:
                          email: pawanr@lambdatest.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
                      - activity_description: User updated their email preferenece
                        activity_name: User - Email Preference Updated
                        changes:
                          marketing: false
                        email: pawanr@lambdatest.com
                        event: user.email-preference.updated
                        event_id: 3108990a-9c21-4b7c-b4f2-ca32321b8015
                        event_time: '2023-10-26T08:38:18Z'
                        ip: 143.110.182.88
                        metadata: null
                        name: pawan1235
                        organization_name: ''
                        original:
                          marketing: true
                        target_identifier:
                          email: pawanr@lambdatest.com
                        user_agent: >-
                          Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
                          AppleWebKit/537.36 (KHTML, like Gecko)
                          Chrome/106.0.0.0 Safari/537.36
        '400':
          description: Invalid date / Invalid limit
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Invalid End Date
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid date:
                  value:
                    message: Invalid End Date
                    title: Bad Request Error
                    type: error
                Invalid limit:
                  value:
                    message: Provided limit value is invalid, please try again !
                    title: Bad Request Error
                    type: error
                    
  /api/logs/{event_id}:
    summary: Get event by ID
    get:
      summary: Get Logs by event ID
      description: Get Audit logs
      operationId: getEvent
      security:
        - basicAuth: []
      tags:
        - Audit logs
      parameters:
        - name: event_id
          in: path
          description: Event id of logs
          required: true
          style: simple
          explode: false
          schema:
            type: string
      responses:
        '200':
          description: success
          content:
            application/json:
              schema:
                type: object
                properties:
                  activity_description:
                    type: string
                    example: User updated their email preferenece
                  activity_name:
                    type: string
                    example: User Email Preference Updated
                  changes:
                    type: object
                    properties:
                      marketing:
                        type: boolean
                        example: false
                  email:
                    type: string
                    example: pawanr@lambdatest.com
                  event:
                    type: string
                    example: user.email-preference.updated
                  event_id:
                    type: string
                    example: 3108990a-9c21-4b7c-b4f2-ca32321b8015
                  event_time:
                    type: string
                    example: '2023-10-26T08:38:18Z'
                  ip:
                    type: string
                    example: 143.110.182.88
                  metadata:
                    nullable: true
                    example: null
                  name:
                    type: string
                    example: pawan1235
                  organization_name:
                    type: string
                    example: ''
                  original:
                    type: object
                    properties:
                      marketing:
                        type: boolean
                        example: true
                  target_identifier:
                    type: object
                    properties:
                      email:
                        type: string
                        example: pawanr@lambdatest.com
                  user_agent:
                    type: string
                    example: >-
                      Mozilla/5.0(Macintosh;IntelMacOSX10_15_7)AppleWebKit/537.36(KHTML,likeGecko)Chrome/106.0.0.0Safari/537.36
              examples:
                Success:
                  value:
                    activity_description: User updated their email preferenece
                    activity_name: User - Email Preference Updated
                    changes:
                      marketing: false
                    email: pawanr@lambdatest.com
                    event: user.email-preference.updated
                    event_id: 3108990a-9c21-4b7c-b4f2-ca32321b8015
                    event_time: '2023-10-26T08:38:18Z'
                    ip: 143.110.182.88
                    metadata: null
                    name: pawan1235
                    organization_name: ''
                    original:
                      marketing: true
                    target_identifier:
                      email: pawanr@lambdatest.com
                    user_agent: >-
                      Mozilla/5.0(Macintosh;IntelMacOSX10_15_7)AppleWebKit/537.36(KHTML,likeGecko)Chrome/106.0.0.0Safari/537.36
        '422':
          description: Invalid event
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Invalid Event ID
                  title:
                    type: string
                    example: Bad Request Error
                  type:
                    type: string
                    example: error
              examples:
                Invalid Event:
                  value:
                    message: Invalid Event ID
                    title: Bad Request Error
                    type: error
          

components:
  securitySchemes:
    basicAuth:
      type: http
      scheme: basic
```

---

