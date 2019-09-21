// Packages
import React, { PureComponent } from 'react'
import Link from 'next/link'

// UI
import { colors, spacing } from '../../ui/theme'

// Types
import { RepositoryPreviewProps } from './repository-preview.interface'

export class RepositoryPreview extends PureComponent<RepositoryPreviewProps> {
  render() {
    const { repository } = this.props
    const { lastJob } = repository
    const repo = `gh/${repository.organization}/${repository.name}`

    return (
      <li>
        <div>
          <h2>{repository.name}</h2>
          <h3>
            <Link href={repo}>
              <a href={repo}>
                {repository.organization}/{repository.name}
              </a>
            </Link>
          </h3>
        </div>

        <div className="box">
          <div>
            <h4>Job</h4>
            <h5>
              <Link href={`${repo}/jobs/${lastJob.id}`}>
                <a href={`${repo}/jobs/${lastJob.id}`}>#{lastJob.id}</a>
              </Link>
            </h5>
          </div>

          <div>
            <h4>Branch</h4>
            <h5>{lastJob.branch}</h5>
          </div>

          <div>
            <h4>Date</h4>
            <h5>{lastJob.date}</h5>
          </div>
        </div>

        <style jsx={true}>{`
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e6edf4;
            padding-bottom: ${spacing.xLarge};
            padding-top: ${spacing.xLarge};
          }

          h2 {
            font-size: 18px;
            font-weight: 500;
            color: ${colors.gray.darker};
          }

          h3,
          h5 {
            font-size: 18px;
            font-weight: 400;
            color: ${colors.text};
            margin-top: ${spacing.small};
          }

          h4 {
            font-size: 14px;
            font-weight: 500;
            color: ${colors.gray.darker};
            text-transform: uppercase;
          }

          .box {
            display: flex;
          }

          .box div {
            margin-left: ${spacing.xxLarge};
          }
        `}</style>
      </li>
    )
  }
}
