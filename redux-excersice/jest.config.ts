//  jest.config.ts

import type { Config } from '@jest/types'
// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    globals: {
        window: {},
        document: {},
    },
}
export default config
